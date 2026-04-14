import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Server, ShieldCheck, Globe, Headphones } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type LearnMoreTab = "managed" | "security" | "edge" | "support";

const LearnMore = () => {
  const [activeTab, setActiveTab] = useState<LearnMoreTab>("managed");
  const [openPanel, setOpenPanel] = useState(false);

  const panelConfig = useMemo(
    () => ({
      managed: {
        title: "Managed Infrastructure Interface",
        description: "A dedicated view for platform-managed networking and observability.",
        points: [
          "Auto-scaling topology map with region health",
          "Live request latency and packet-loss indicators",
          "Operational checklist for deployment readiness",
        ],
      },
      security: {
        title: "Security Operations Interface",
        description: "A dedicated view for compliance, policy control, and threat protection.",
        points: [
          "Access policy overview and service trust graph",
          "Certificate/secrets lifecycle status",
          "Audit timeline with incident drill-down",
        ],
      },
      edge: {
        title: "Global Edge Delivery Interface",
        description: "A dedicated view for routing, edge cache, and failover strategy.",
        points: [
          "Region-wise traffic distribution",
          "Active failover path and recovery ETA",
          "Cache hit ratio and route optimization tips",
        ],
      },
      support: {
        title: "Support & Onboarding Interface",
        description: "A dedicated view for SLA support flow and onboarding milestones.",
        points: [
          "Incident priority queue with response windows",
          "Customer onboarding progress tracker",
          "Escalation matrix and weekly action items",
        ],
      },
    }),
    [],
  );

  const openTabInterface = (tab: LearnMoreTab) => {
    setActiveTab(tab);
    setOpenPanel(true);
  };

  return (
    <section id="learn-more" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl font-display font-bold mb-3">What We Provide</h2>
          <p className="text-muted-foreground mb-6">Aselea Network offers production-ready networking and edge services that let engineering teams focus on product.</p>

          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as LearnMoreTab)}>
            <TabsList className="mb-4">
              <TabsTrigger value="managed" onClick={() => openTabInterface("managed")}><Server className="mr-2 h-4 w-4" />Managed</TabsTrigger>
              <TabsTrigger value="security" onClick={() => openTabInterface("security")}><ShieldCheck className="mr-2 h-4 w-4" />Security</TabsTrigger>
              <TabsTrigger value="edge" onClick={() => openTabInterface("edge")}><Globe className="mr-2 h-4 w-4" />Edge</TabsTrigger>
              <TabsTrigger value="support" onClick={() => openTabInterface("support")}><Headphones className="mr-2 h-4 w-4" />Support</TabsTrigger>
            </TabsList>

            <TabsContent value="managed">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Managed Network Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Fully managed, highly available network stacks with automated scaling and health checks.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Auto-provisioned edge and core networking components</li>
                    <li>Traffic-aware scaling during peak demand windows</li>
                    <li>Continuous uptime monitoring with proactive alerts</li>
                  </ul>
                </div>
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Observability</h3>
                  <p className="text-sm text-muted-foreground">Integrations for logs, metrics, and alerts so you can monitor health and performance in real-time.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Unified dashboards for latency, throughput, and errors</li>
                    <li>Service-level objective (SLO) based alerting</li>
                    <li>Root-cause traces across distributed services</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg border border-border/50">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                    alt="Managed infrastructure dashboard and analysis"
                    className="w-full h-full min-h-[240px] object-cover"
                  />
                </div>
              </div>
              <div className="mt-4 p-5 bg-primary/5 border border-primary/20 rounded-lg">
                <p className="text-sm text-foreground">
                  Ideal for teams that want enterprise-grade networking without maintaining complex infra manually.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="security">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Security & Compliance</h3>
                  <p className="text-sm text-muted-foreground">End-to-end encryption, identity-based access, and compliance support for SOC2 and ISO standards.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Zero-trust policies with role-based controls</li>
                    <li>Encrypted traffic between services and regions</li>
                    <li>Audit logs for governance and traceability</li>
                  </ul>
                </div>
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Threat Protection</h3>
                  <p className="text-sm text-muted-foreground">Continuous hardening and attack-surface reduction across network layers.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>DDoS mitigation and anomaly detection</li>
                    <li>Automated certificate and secrets rotation</li>
                    <li>Policy checks in CI/CD before deployment</li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg border border-border/50">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
                    alt="Security analyst reviewing threat data"
                    className="w-full h-full min-h-[240px] object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="edge">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg md:col-span-2">
                  <h3 className="font-semibold mb-2">Global Edge Delivery</h3>
                  <p className="text-sm text-muted-foreground">Deploy applications close to users with an edge-first architecture and multi-region routing.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Region-aware request routing for low latency</li>
                    <li>Smart failover for outage resilience</li>
                    <li>Edge caching tuned for dynamic workloads</li>
                  </ul>
                </div>
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Typical Results</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xl font-bold">30-50%</div>
                      <p className="text-xs text-muted-foreground">Lower average latency</p>
                    </div>
                    <div>
                      <div className="text-xl font-bold">99.9%+</div>
                      <p className="text-xs text-muted-foreground">Service availability target</p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-border/50 md:col-span-3">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80"
                    alt="Global edge routing operations room"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Observability & Support</h3>
                  <p className="text-sm text-muted-foreground">Built-in monitoring, logging, and 24/7 enterprise support with SLAs tailored to your needs.</p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>24/7 incident response coverage</li>
                    <li>Priority channels for critical tickets</li>
                    <li>Post-incident reports with action plans</li>
                  </ul>
                </div>
                <div className="p-6 bg-card/40 border border-border/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Onboarding Journey</h3>
                  <ol className="mt-3 list-decimal pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Architecture review and goals alignment</li>
                    <li>Migration plan with rollout checkpoints</li>
                    <li>Go-live validation and handover support</li>
                  </ol>
                </div>
                <div className="overflow-hidden rounded-lg border border-border/50 md:col-span-2">
                  <img
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80"
                    alt="Support and onboarding specialists in collaborative session"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Dialog open={openPanel} onOpenChange={setOpenPanel}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>{panelConfig[activeTab].title}</DialogTitle>
                <DialogDescription>{panelConfig[activeTab].description}</DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                {panelConfig[activeTab].points.map((item) => (
                  <div key={item} className="rounded-lg border border-border/50 bg-card/50 p-4">
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="text-sm text-muted-foreground">
                  This is your new tab interface. You can customize this panel further for workflows, charts, forms, or analytics.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default LearnMore;
