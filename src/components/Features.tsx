import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Layers } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type FeatureItem = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  stat: string;
  meta: string;
  layout: string;
  image: string;
  details: string[];
};

const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Ultra-low latency infrastructure optimized for peak performance across global endpoints.",
    stat: "27ms",
    meta: "Avg edge response",
    layout: "md:col-span-7",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Edge-first routing with latency-aware request steering.",
      "Smart caching policies for repeat traffic and hot endpoints.",
      "Performance SLO tracking with weekly optimization reports.",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade encryption and zero-trust architecture protecting every layer of your network.",
    stat: "99.99%",
    meta: "Policy integrity",
    layout: "md:col-span-5",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Zero-trust controls with role-based policy assignment.",
      "Encrypted service-to-service traffic and secure key handling.",
      "Continuous posture monitoring with actionable risk insights.",
    ],
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Deploy across 50+ regions worldwide with automatic failover and intelligent routing.",
    stat: "50+",
    meta: "Connected regions",
    layout: "md:col-span-4",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Multi-region deployment patterns for better user proximity.",
      "Automatic failover orchestration during zone disruptions.",
      "Geo-aware traffic segmentation for compliance and reliability.",
    ],
  },
  {
    icon: Layers,
    title: "Seamless Scaling",
    description: "Auto-scaling infrastructure that grows with your demand — from startup to enterprise.",
    stat: "3.8M",
    meta: "Signals / min",
    layout: "md:col-span-8",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Elastic compute and queue balancing under traffic bursts.",
      "Horizontal scaling playbooks for API and worker workloads.",
      "Capacity trend insights that support planning and budgeting.",
    ],
  },
];

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<FeatureItem | null>(null);

  return (
    <section className="py-28 relative mesh-section" id="features">
      <span className="mesh-blob mesh-blob-cyan" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-violet" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 gradient-text">
            Why Choose <span>Aselea Network</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(190px,auto)]">
          {features.map((f, index) => (
            <motion.article
              key={f.title}
              className={`glass-card-hover p-8 group ${f.layout}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, delay: index * 0.08 }}
            >
              <button
                type="button"
                onClick={() => setActiveFeature(f)}
                className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-xl"
                aria-label={`Open ${f.title} details`}
              >
                <div className="relative overflow-hidden rounded-xl border border-border/40 mb-5">
                  <img
                    loading="lazy"
                    src={f.image}
                    alt={f.title}
                    className="w-full h-36 md:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors feature-icon">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
                <div className="mt-6 flex items-end justify-between">
                  <strong className="text-2xl font-display">{f.stat}</strong>
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">{f.meta}</span>
                </div>
                <p className="mt-4 text-xs uppercase tracking-wide text-primary">Tap to view details</p>
              </button>
            </motion.article>
          ))}
        </div>

        <Dialog open={Boolean(activeFeature)} onOpenChange={(open) => !open && setActiveFeature(null)}>
          <DialogContent className="w-[92vw] max-w-3xl">
            {activeFeature ? (
              <div className="space-y-5">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-display">{activeFeature.title}</DialogTitle>
                  <DialogDescription>{activeFeature.description}</DialogDescription>
                </DialogHeader>

                <div className="overflow-hidden rounded-xl border border-border/40">
                  <img
                    loading="lazy"
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  {activeFeature.details.map((detail) => (
                    <div key={detail} className="rounded-lg border border-border/50 bg-card/40 p-3 text-muted-foreground">
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-foreground">{activeFeature.meta}</span>
                  <strong className="font-display text-xl text-primary">{activeFeature.stat}</strong>
                </div>
              </div>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Features;
