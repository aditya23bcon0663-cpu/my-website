import { motion } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
    alt: "Product team planning sprint roadmap",
    title: "Sprint Planning",
    desc: "Strategy, architecture, and execution alignment before every build cycle.",
    size: "md:col-span-7",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Developers collaborating in office",
    title: "Engineering Collaboration",
    desc: "Cross-functional squads shipping features with speed and quality.",
    size: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Analytics dashboard review",
    title: "Data-Driven Delivery",
    desc: "Performance reviews, KPI tracking, and continuous optimization.",
    size: "md:col-span-4",
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Client workshop session",
    title: "Client Workshops",
    desc: "Hands-on sessions to turn business goals into product milestones.",
    size: "md:col-span-8",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Product team discussing roadmap",
    title: "Product Strategy",
    desc: "Roadmaps aligned with business priorities, user feedback, and release velocity.",
    size: "md:col-span-6",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Developers reviewing code together",
    title: "Code Reviews",
    desc: "Peer reviews and quality gates to keep code maintainable and production ready.",
    size: "md:col-span-6",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    alt: "UI design session",
    title: "Design to Development",
    desc: "Design systems transformed into responsive, performant interfaces.",
    size: "md:col-span-5",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineering team deployment monitoring",
    title: "Launch Monitoring",
    desc: "Post-launch observability, alerts, and iterative optimization for stability.",
    size: "md:col-span-7",
  },
];

const HomePhotoShowcase = () => {
  return (
    <section className="py-24 relative mesh-section" aria-labelledby="home-photo-title">
      <span className="mesh-blob mesh-blob-cyan" aria-hidden="true" />
      <span className="mesh-blob mesh-blob-violet" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-widest font-semibold">Inside Aselea</p>
          <h2 id="home-photo-title" className="text-3xl md:text-5xl font-display font-bold mt-2">How We Build, Ship, and Scale</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A quick look at our real delivery rhythm, from planning rooms to production monitoring.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(210px,auto)]">
          {photos.map((photo, idx) => (
            <motion.article
              key={photo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.58, delay: idx * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/40 bg-card/25 ${photo.size}`}
            >
              <img
                loading="lazy"
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full min-h-[260px] md:min-h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-display font-semibold">{photo.title}</h3>
                <p className="text-white/85 text-sm mt-1 max-w-xl">{photo.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePhotoShowcase;
