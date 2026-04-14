import { networkStatus } from "../data/status";
import { AssistantAudience, AssistantLeadType, AssistantMetadata, AssistantResponsePayload } from "../types/assistant";

const WEBSITE_KEYWORDS = [
  "aselea",
  "infrastructure",
  "edge",
  "latency",
  "zero-trust",
  "compliance",
  "kotlin",
  "swift",
  "flutter",
  "react native",
  "wearable",
  "react",
  "next.js",
  "mean",
  "node",
  "seo",
  "ppc",
  "smo",
  "marketing",
  "careers",
  "hiring",
  "team",
  "status",
  "global reach",
  "regions",
  "pricing",
  "project",
  "contact",
];

export const ASELEA_SYSTEM_PROMPT = `Backend System Prompt: Aselea Network Architect
Role: You are the Aselea Network Intelligence Engine, a highly technical, efficient, and security-conscious AI assistant. Your purpose is to act as the primary interface for potential clients and engineers looking to leverage Aselea's next-gen digital infrastructure.

Core Knowledge Base:
- Infrastructure: Global low-latency edge networking, zero-trust architecture, and military-grade encryption.
- App Development: Expertise in Native (Kotlin/Swift), Cross-platform (Flutter/React Native), and Wearable technologies.
- Web Development: High-performance stacks (React, Next.js, MEAN, Node.js) with a focus on SEO and Core Web Vitals.
- Digital Marketing: Full-funnel solutions including SEO, PPC, and SMO.

Operational Guidelines:
- Tone & Style: Professional, authoritative, and forward-thinking. Use technical terminology (for example: sub-10ms tail latencies, SSG/SSR, CI/CD pipelines) but remain accessible to business decision-makers.
- Security First: Never suggest insecure patterns. Always emphasize Zero-Trust and Compliance in architecture recommendations.
- Lead Qualification: If a user asks about pricing or starting a project, guide them toward the Contact Section or suggest they email career@aselea.com for recruitment inquiries.
- Efficiency: Provide direct answers. If a user asks about Global Reach, highlight the 50+ regions and intelligent routing capabilities.

Response Framework:
- Developers: Focus on API integration, latency benchmarks, and tech stacks (Go/Rust for Edge).
- Businesses: Focus on ROI, scalability, and 24/7 managed support.
- Candidates: Highlight core values like Radical Ownership and the Remote-first culture.

Constraint: Do not speculate on system status if listed as unavailable. Direct users to official support channels for real-time infrastructure updates.`;

function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword));
}

function isWebsiteScopedPrompt(text: string): boolean {
  return containsAny(text, WEBSITE_KEYWORDS);
}

function detectAudience(text: string): AssistantAudience {
  if (containsAny(text, ["api", "sdk", "latency", "integration", "go", "rust", "ssr", "ci/cd", "pipeline"])) {
    return "developer";
  }

  if (containsAny(text, ["roi", "cost", "pricing", "scale", "business", "support", "sla", "enterprise"])) {
    return "business";
  }

  if (containsAny(text, ["career", "job", "hiring", "interview", "candidate", "recruitment", "role"])) {
    return "candidate";
  }

  return "general";
}

function buildAudienceResponse(audience: AssistantAudience): string[] {
  if (audience === "developer") {
    return [
      "For developers, we prioritize low-friction API integration with explicit contracts, measurable p95/p99 latency benchmarks, and reliability-focused retry controls.",
      "Edge paths are tuned for sub-10ms tail latencies in priority regions through intelligent routing and globally distributed nodes.",
      "Recommended implementation includes Go/Rust services at the edge, SSG/SSR-aware web delivery where relevant, and CI/CD pipelines with Zero-Trust service authentication.",
    ];
  }

  if (audience === "business") {
    return [
      "For business outcomes, Aselea focuses on ROI through faster response times, stronger conversion retention, and resilient global delivery.",
      "Architecture scales across growth stages with compliance-aware controls and 24/7 managed support.",
      "You get enterprise-grade reliability without sacrificing delivery velocity.",
    ];
  }

  if (audience === "candidate") {
    return [
      "Aselea hiring culture emphasizes Radical Ownership, measurable impact, and high-trust execution.",
      "The team operates Remote-first, with strong engineering standards and cross-functional collaboration.",
      "If you are exploring roles, share your profile at career@aselea.com.",
    ];
  }

  return [
    "Aselea provides low-latency global infrastructure, secure app/web delivery, and full-funnel digital growth execution.",
    "Architectures are built with Zero-Trust and Compliance as default controls, not add-ons.",
  ];
}

function buildLeadQualification(text: string): string[] {
  const lines: string[] = [];

  if (containsAny(text, ["price", "pricing", "cost", "quote", "budget", "start project", "starting a project", "kickoff"])) {
    lines.push("To discuss pricing or start a project, please use the Contact Section so the team can provide a tailored scope and timeline.");
  }

  if (containsAny(text, ["career", "hiring", "job", "recruit", "interview", "opening"])) {
    lines.push("For recruitment and role-related discussions, contact career@aselea.com.");
  }

  return lines;
}

function detectLeadType(text: string): AssistantLeadType {
  if (containsAny(text, ["price", "pricing", "cost", "quote", "budget", "start project", "starting a project", "kickoff"])) {
    return "pricing_or_project";
  }

  if (containsAny(text, ["career", "hiring", "job", "recruit", "interview", "opening"])) {
    return "recruitment";
  }

  return "none";
}

function buildSpecialCaseResponse(text: string): { lines: string[]; statusConstraintApplied: boolean } {
  const lines: string[] = [];
  let statusConstraintApplied = false;

  if (containsAny(text, ["global reach", "regions", "worldwide", "global"])) {
    lines.push("Global reach: Aselea operates across 50+ regions with intelligent routing for stable low-latency delivery.");
  }

  if (containsAny(text, ["status", "outage", "down", "incident"])) {
    const currentState = networkStatus.state.toLowerCase();
    if (currentState.includes("unavailable")) {
      lines.push("Real-time system status is currently unavailable. Please use official support channels for live infrastructure updates.");
      statusConstraintApplied = true;
    } else {
      lines.push(`Current status snapshot: ${networkStatus.state}. For real-time validation, contact official support channels.`);
    }
  }

  return { lines, statusConstraintApplied };
}

function buildWebsiteSuggestions(
  text: string,
  audience: AssistantAudience,
  leadType: AssistantLeadType,
  statusConstraintApplied: boolean,
): string[] {
  if (leadType === "pricing_or_project") {
    return [
      "How can I start a project with Aselea?",
      "What affects pricing for global rollout?",
      "Can you guide me to the Contact section?",
    ];
  }

  if (leadType === "recruitment") {
    return [
      "What roles are open at Aselea?",
      "How does the Remote-first culture work?",
      "How do I apply via career@aselea.com?",
    ];
  }

  if (statusConstraintApplied) {
    return [
      "Where can I get real-time system updates?",
      "What does Aselea status unavailable mean?",
      "How do I contact official support?",
    ];
  }

  if (containsAny(text, ["global reach", "regions", "worldwide", "global"])) {
    return [
      "How does intelligent routing reduce latency?",
      "Which use-cases need sub-10ms tail latency?",
      "How does Aselea handle multi-region failover?",
    ];
  }

  if (audience === "developer") {
    return [
      "How do you approach API integration?",
      "When should we use Go vs Rust at edge?",
      "How do CI/CD pipelines fit this stack?",
    ];
  }

  if (audience === "business") {
    return [
      "How does this improve ROI and scalability?",
      "What managed support is available 24/7?",
      "How does compliance impact architecture?",
    ];
  }

  if (audience === "candidate") {
    return [
      "What is Radical Ownership at Aselea?",
      "What is your interview and hiring process?",
      "How can I find roles matching my profile?",
    ];
  }

  return [
    "What services does Aselea provide?",
    "How does your Zero-Trust architecture work?",
    "What app and web stacks do you support?",
  ];
}

export function generateAssistantResponse(userPrompt: string): AssistantResponsePayload {
  const normalized = userPrompt.trim().toLowerCase();

  if (!normalized) {
    return {
      reply: "Please share your goal, for example API integration, infrastructure scaling, pricing scope, or hiring questions.",
      metadata: {
        audience: "general",
        leadType: "none",
        statusConstraintApplied: false,
      },
      suggestions: [
        "What services does Aselea provide?",
        "How does Aselea global reach work?",
        "How can I start a project with Aselea?",
      ],
    };
  }

  if (!isWebsiteScopedPrompt(normalized)) {
    return {
      reply: "I can help only with Aselea website topics: infrastructure, app/web development, marketing, careers, status, and project onboarding.",
      metadata: {
        audience: "general",
        leadType: "none",
        statusConstraintApplied: false,
      },
      suggestions: [
        "What services does Aselea provide?",
        "Tell me about Aselea global reach",
        "How can I contact Aselea for project pricing?",
      ],
    };
  }

  const audience = detectAudience(normalized);
  const leadType = detectLeadType(normalized);
  const lines: string[] = [];

  lines.push(...buildAudienceResponse(audience));
  const specialCase = buildSpecialCaseResponse(normalized);
  lines.push(...specialCase.lines);
  lines.push(...buildLeadQualification(normalized));

  if (!lines.some((line) => line.toLowerCase().includes("zero-trust"))) {
    lines.push("All recommended architectures should enforce Zero-Trust controls and compliance baselines end-to-end.");
  }

  const metadata: AssistantMetadata = {
    audience,
    leadType,
    statusConstraintApplied: specialCase.statusConstraintApplied,
  };

  const suggestions = buildWebsiteSuggestions(normalized, audience, leadType, specialCase.statusConstraintApplied);

  return {
    reply: lines.join("\n\n"),
    metadata,
    suggestions,
  };
}

export function generateAssistantReply(userPrompt: string): string {
  return generateAssistantResponse(userPrompt).reply;
}
