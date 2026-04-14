import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import team from "../lib/team";
import { fetchTeam, TeamMember } from "@/lib/api";

function getColorFromName(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const skin = ["#FFD8C2", "#F5D3B6", "#E6B89C", "#D6A77A"][Math.abs(hash) % 4];
  const hair = ["#2F2F2F", "#5B3A2E", "#3B2F2F", "#1F2937"][Math.abs(hash >> 2) % 4];
  const shirt = ["#60A5FA", "#7C3AED", "#34D399", "#F97316"][Math.abs(hash >> 4) % 4];
  return { skin, hair, shirt };
}

const AvatarSVG: React.FC<{ name: string; size?: number; variant?: number }> = ({ name, size = 200, variant }) => {
  const { skin, hair, shirt } = getColorFromName(name);
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("");
  // choose variant (0-3) by provided prop or stable hash
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const v = typeof variant === "number" ? (variant % 4 + 4) % 4 : Math.abs(hash) % 4;

  // background gradient - light grey studio backdrop
  return (
    <svg
      className="avatar-3d"
      width={size}
      height={size}
      viewBox="0 0 200 200"
      role="img"
      aria-label={`${name} avatar`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bgGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#f3f4f6" />
          <stop offset="100%" stopColor="#e6e9ee" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="200" height="200" rx="20" ry="20" fill="url(#bgGrad)" />

      {/* Shirt */}
      <rect x="30" y="130" width="140" height="50" rx="14" fill={shirt} />

      {/* Neck */}
      <rect x="92" y="108" width="16" height="20" rx="6" fill={skin} />

      {/* Face */}
      <ellipse cx="100" cy="82" rx="44" ry="46" fill={skin} />

      {/* Hair (simple shape) */}
      {v === 0 && (
        <path d="M58 70 C62 40, 138 40, 142 70 C142 70,126 86,100 86 C74 86,58 70,58 70 Z" fill={hair} />
      )}
      {v === 1 && (
        <path d="M50 68 C64 38, 136 38, 150 68 C150 68,132 92,100 92 C68 92,50 68,50 68 Z" fill={hair} />
      )}
      {v === 2 && (
        <path d="M56 66 C68 36, 132 36, 144 66 C144 66,128 88,100 88 C72 88,56 66,56 66 Z" fill={hair} />
      )}
      {v === 3 && (
        <path d="M44 64 C64 30, 136 30, 156 64 C156 64,126 100,100 96 C80 92,44 64,44 64 Z" fill={hair} />
      )}

      {/* Eyes */}
      <ellipse cx="82" cy="80" rx="5" ry="6" fill="#111827" />
      <ellipse cx="118" cy="80" rx="5" ry="6" fill="#111827" />

      {/* Mouth */}
      <path d="M85 96 Q100 106 115 96" stroke="#7C3A2E" strokeWidth="3" fill="transparent" strokeLinecap="round" />

      {/* Cheeks subtle */}
      <circle cx="74" cy="92" r="4" fill="#FFD1C6" opacity="0.6" />
      <circle cx="126" cy="92" r="4" fill="#FFD1C6" opacity="0.6" />

      {/* Initials small fallback (hidden visually but helpful) */}
      <text x="100" y="170" textAnchor="middle" fontSize="10" fill="#0f172a" opacity="0.6">
        {initials}
      </text>

      {/* Variant-specific features: beard, glasses, and hand gesture */}
      {v === 0 && (
        // light beard + waving hand (right)
        <>
          <path d="M72 100 C78 112,122 112,128 100 C122 108,78 108,72 100 Z" fill="#b97c5a" opacity="0.9" />
          <g transform="translate(140,110)">
            <circle cx="12" cy="18" r="8" fill="#FCD5B5" />
            <path d="M6 14 Q12 6 20 12" stroke="#FCD5B5" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>
        </>
      )}

      {v === 1 && (
        // glasses + OK sign (left hand)
        <>
          <rect x="68" y="72" width="24" height="14" rx="6" fill="transparent" stroke="#111827" strokeWidth="2" />
          <rect x="108" y="72" width="24" height="14" rx="6" fill="transparent" stroke="#111827" strokeWidth="2" />
          <g transform="translate(20,118)">
            <circle cx="12" cy="18" r="6" fill="#FCD5B5" />
            <circle cx="12" cy="18" r="2.2" fill="#111827" />
          </g>
        </>
      )}

      {v === 2 && (
        // mustache + thumbs-up (right hand)
        <>
          <path d="M80 96 C92 102,108 102,120 96 C112 100,88 100,80 96 Z" fill="#8b5a3c" />
          <g transform="translate(138,100)">
            <rect x="0" y="6" width="14" height="10" rx="4" fill="#FCD5B5" />
            <rect x="-4" y="0" width="8" height="6" rx="3" fill="#FCD5B5" transform="rotate(-20 0 0)" />
          </g>
        </>
      )}

      {v === 3 && (
        // clean + peace sign (left hand two-fingers)
        <>
          <g transform="translate(18,100)">
            <rect x="8" y="6" width="4" height="16" rx="2" fill="#FCD5B5" transform="rotate(-12 10 14)" />
            <rect x="14" y="6" width="4" height="12" rx="2" fill="#FCD5B5" transform="rotate(-8 16 12)" />
            <circle cx="12" cy="22" r="6" fill="#FCD5B5" />
          </g>
        </>
      )}
    </svg>
  );
};

const OurTeam: React.FC = () => {
  const [apiTeam, setApiTeam] = useState<TeamMember[]>([]);

  const teamStats = [
    {
      value: "24/7",
      label: "Delivery Rhythm",
      detail: "Always-on monitoring and response",
      layout: "md:col-span-3 md:row-span-2",
    },
    {
      value: "50+",
      label: "Global Regions",
      detail: "Distributed engineering collaboration",
      layout: "md:col-span-3",
    },
    {
      value: "99.9%",
      label: "Reliability Target",
      detail: "SLA-first execution model",
      layout: "md:col-span-2",
    },
    {
      value: "1 Team",
      label: "Shared Ownership",
      detail: "Design, code, and ops in one lane",
      layout: "md:col-span-4",
    },
  ];

  const getRoleTag = (role: string) => {
    const normalized = role.toLowerCase();
    if (normalized.includes("engineer") || normalized.includes("developer")) return "Engineering";
    if (normalized.includes("design")) return "Design";
    if (normalized.includes("marketing")) return "Growth";
    if (normalized.includes("operations") || normalized.includes("ops")) return "Operations";
    return "Leadership";
  };

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await fetchTeam();
        if (Array.isArray(data) && data.length > 0) {
          setApiTeam(data);
        }
      } catch {
        setApiTeam([]);
      }
    };

    void loadTeam();
  }, []);

  const resolvedTeam = useMemo(() => {
    if (apiTeam.length === 0) {
      return team;
    }

    return apiTeam.map((member) => {
      const local = team.find((t) => t.name.toLowerCase() === member.name.toLowerCase());
      return {
        name: member.name,
        role: member.role,
        photo: local?.photo || member.imagePath || "",
        linkedin: local?.linkedin,
      };
    });
  }, [apiTeam]);

  return (
    <section className="team-section py-24 relative mesh-section overflow-hidden">
      <span className="team-mesh team-mesh-a" aria-hidden="true" />
      <span className="team-mesh team-mesh-b" aria-hidden="true" />
      <span className="team-mesh team-mesh-c" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-cyan" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-violet" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-[0.28em] font-semibold mb-4 font-body team-header-kicker">
            <Sparkles className="h-3.5 w-3.5" />
            Meet The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-body font-semibold text-white team-heading">People Behind Aselea</h2>
          <p className="text-sm md:text-base text-slate-300 mt-4 max-w-2xl mx-auto">
            A focused mix of product thinkers, engineers, and operators building fast, reliable digital experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-6 auto-rows-[minmax(74px,auto)] gap-3 mb-10">
          {teamStats.map((item) => (
            <div key={item.label} className={`team-stat-pill text-left ${item.layout}`}>
              <p className="text-white font-body text-2xl md:text-3xl font-semibold tracking-tight">{item.value}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-300 mt-1">{item.label}</p>
              <p className="text-xs text-slate-400 mt-1">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {resolvedTeam.map((m, index) => {
            return (
              <motion.article
                key={m.name}
                className="team-card rounded-2xl p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <p className="team-role-tag">{getRoleTag(m.role)}</p>
                <div className="avatar-wrap mb-6" style={{ perspective: 1000 }}>
                  <AvatarSVG name={m.name} size={188} />
                </div>

                <h3 className="team-name">{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p className="text-xs text-slate-500 max-w-[220px]">
                  Building secure, scalable systems with user-first thinking and production discipline.
                </p>

                <div className="mt-auto social-row">
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn profile"
                      className="social-icon inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                        <path d="M20.447 20.452h-3.554V14.87c0-1.33-.027-3.041-1.854-3.041-1.854 0-2.137 1.445-2.137 2.944v5.679H9.348V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.372 4.267 5.456v6.284zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
