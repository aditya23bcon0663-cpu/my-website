import React from "react";
import { Smartphone, Code, Megaphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type InternalServiceLink = {
  label: string;
  to: string;
};

type ExternalServiceLink = {
  label: string;
  href: string;
};

type ServicePoint = {
  text: string;
};

type ServiceMetric = {
  value: string;
  label: string;
};

const Services: React.FC = () => {
  const appTracks: InternalServiceLink[] = [
    { label: "Android App Development", to: "/android" },
    { label: "iOS App Development", to: "/ios" },
    { label: "Flutter Development", to: "/flutter" },
    { label: "React Native Development", to: "/react-native" },
    { label: "Cross Platform Apps", to: "/cross-platform" },
    { label: "Wearable Apps", to: "/wearable" },
  ];

  const webTracks: ExternalServiceLink[] = [
    { label: "PHP", href: "/web/php" },
    { label: "MEAN", href: "/web/mean" },
    { label: "Node.js", href: "/web/nodejs" },
    { label: "AngularJS", href: "/web/angular" },
    { label: "Python Web", href: "/web/python" },
    { label: "UI/UX", href: "/web/uiux" },
  ];

  const marketingTracks: InternalServiceLink[] = [
    { label: "Facebook Marketing", to: "/marketing/facebook" },
    { label: "LinkedIn Marketing", to: "/marketing/linkedin" },
    { label: "SEO & PPC", to: "/marketing/seo" },
    { label: "Email Marketing", to: "/marketing/email" },
  ];

  const engineeringCoverage: ServicePoint[] = [
    { text: "API design and security hardening" },
    { text: "Performance tuning and observability" },
    { text: "Scalable frontend architecture" },
    { text: "Cloud-ready deployment pipelines" },
  ];

  const deliveryPoints: ServicePoint[] = [
    { text: "Kickoff workshop and scope map" },
    { text: "Bi-weekly demos and backlog reprioritization" },
    { text: "Go-live support with stabilization window" },
  ];

  const serviceMetrics: ServiceMetric[] = [
    { value: "99.9%", label: "Target uptime" },
    { value: "24/7", label: "Ops visibility" },
    { value: "50+", label: "Global delivery zones" },
  ];

  return (
    <section id="services" className="py-28 relative mesh-section" aria-labelledby="services-title">
      <span className="mesh-blob mesh-blob-cyan" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-violet" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62 }}
        >
          <h2 id="services-title" className="text-3xl md:text-5xl font-display font-bold gradient-text">Our Services</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Purpose-built service tracks designed for speed, resilience, and global product delivery.</p>
          <p className="text-sm text-muted-foreground/90 mt-3 max-w-3xl mx-auto">
            Every engagement includes discovery, technical planning, sprint execution, quality gates, and launch support so you get a complete delivery path, not isolated coding hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(170px,auto)]">
          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58 }}
            className="glass-card-hover p-7 md:col-span-7"
          >
            <header className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center feature-icon"><Smartphone className="w-5 h-5 text-primary" /></div>
              <h3 id="srv-app" className="text-xl font-display font-semibold">App Development</h3>
            </header>
            <p className="text-sm text-muted-foreground mb-4">Native and cross-platform mobile engineering with performance-first architecture.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-5">
              <div className="rounded-xl border border-border/60 bg-card/35 p-3">
                <p className="uppercase tracking-wide text-primary/90 mb-1">Best For</p>
                <p className="text-muted-foreground">Consumer apps, logistics tools, fintech products, and internal workforce apps.</p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card/35 p-3">
                <p className="uppercase tracking-wide text-primary/90 mb-1">What You Get</p>
                <p className="text-muted-foreground">Architecture docs, CI/CD setup, crash monitoring, release checklist, and handover notes.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {appTracks.map((track) => (
                <Link
                  key={track.label}
                  to={track.to}
                  className="rounded-xl border border-border/50 bg-card/40 px-4 py-3 hover:border-primary/30 transition-colors flex items-center justify-between gap-2"
                >
                  <span>{track.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: 0.08 }}
            className="glass-card-hover p-7 md:col-span-5"
          >
            <header className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center feature-icon"><Code className="w-5 h-5 text-primary" /></div>
              <h3 id="srv-web" className="text-xl font-display font-semibold">Web Development</h3>
            </header>
            <p className="text-sm text-muted-foreground mb-4">High-availability backend and frontend systems for modern enterprise web products.</p>
            <div className="rounded-xl border border-border/60 bg-card/35 p-4 mb-4">
              <p className="text-xs uppercase tracking-wide text-primary mb-2">Engineering Coverage</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                {engineeringCoverage.map((point) => (
                  <p key={point.text} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary" />
                    {point.text}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {webTracks.map((track) => (
                <a
                  key={track.label}
                  href={track.href}
                  className="rounded-full border border-border/60 px-3 py-1.5 hover:border-primary/35 transition-colors"
                >
                  {track.label}
                </a>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: 0.12 }}
            className="glass-card-hover p-7 md:col-span-4"
          >
            <header className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center feature-icon"><Megaphone className="w-5 h-5 text-primary" /></div>
              <h3 id="srv-marketing" className="text-xl font-display font-semibold">Digital Marketing</h3>
            </header>
            <p className="text-sm text-muted-foreground mb-3">Full-funnel growth execution with channel strategy, creative, targeting, and conversion optimization.</p>
            <div className="grid grid-cols-1 gap-2 text-sm">
              {marketingTracks.map((track) => (
                <Link
                  key={track.label}
                  to={track.to}
                  className="rounded-lg border border-border/60 px-3 py-2 hover:border-primary/35 transition-colors"
                >
                  {track.label}
                </Link>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">Includes weekly reporting dashboard, lead quality checks, and campaign iteration roadmap.</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="glass-card-hover p-7 md:col-span-4"
          >
            <p className="text-xs uppercase tracking-widest text-primary">Delivery Model</p>
            <h4 className="text-lg font-display mt-2">Agile pods with weekly releases</h4>
            <p className="text-sm text-muted-foreground mt-2">Transparent sprint updates, measurable milestones, and architecture notes in every cycle.</p>
            <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
              {deliveryPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-primary" />
                  {point.text}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.58, delay: 0.2 }}
            className="glass-card-hover p-7 md:col-span-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {serviceMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-2xl font-display">{metric.value}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-border/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-border/50 bg-card/35 p-3">
                <p className="text-xs uppercase tracking-wide text-primary mb-1">Compliance Ready</p>
                <p className="text-muted-foreground">Audit trails, access controls, and secure data workflows built into delivery.</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card/35 p-3">
                <p className="text-xs uppercase tracking-wide text-primary mb-1">Post Launch</p>
                <p className="text-muted-foreground">Monitoring, optimization sprints, and structured roadmap planning after release.</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default Services;
