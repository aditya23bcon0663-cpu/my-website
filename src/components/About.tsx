import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-28 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-8">
              Redefining <span>Connectivity</span>
            </h2>
          </motion.div>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Aselea Network is pioneering the next generation of digital infrastructure. We believe in a world where connectivity is seamless, secure, and universally accessible. Our platform combines cutting-edge technology with intuitive design to deliver network solutions that empower businesses to thrive in the digital age.
          </motion.p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-card/30 border border-border/30 rounded-lg">
              <div className="relative overflow-hidden rounded-lg border border-border/40 mb-4">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                  alt="Team planning modern web and app solutions"
                  className="w-full h-44 object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">What We Provide</h4>
              <div className="text-sm text-muted-foreground space-y-4">
                <div>
                  <div className="font-semibold mb-1">Web Development</div>
                  <p>
                    We build SEO-optimized, lightning-fast web applications using React and Next.js. Our services
                    include server-side rendering (SSR) and static generation (SSG), edge functions, Core Web Vitals
                    optimization, accessibility best practices, image/CDN optimization, and automated CI/CD with testing
                    and observability to keep production reliable and fast.
                  </p>
                </div>

                <div>
                  <div className="font-semibold mb-1">App Development</div>
                  <p>
                    We deliver cross-platform mobile and desktop applications (React Native/Expo and Progressive Web
                    Apps) focused on native-like performance, offline-first experiences, secure authentication,
                    analytics, and seamless backend integration using serverless or containerized services (GraphQL/REST).
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-card/30 border border-border/30 rounded-lg">
              <div className="relative overflow-hidden rounded-lg border border-border/40 mb-4">
                <img
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Operations and support team in discussion"
                  className="w-full h-44 object-cover"
                />
              </div>
              <h4 className="font-semibold mb-2">Additional Services</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                <li>Managed low-latency networking and edge infrastructure</li>
                <li>Custom integrations and developer tooling</li>
                <li>Dedicated 24/7 technical support and SLAs</li>
                <li>Security-first architecture and compliance guidance</li>
              </ul>
            </div>
          </div>

          <motion.p
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            From startups to Fortune 500 companies, we provide the backbone that keeps the digital world running — faster, safer, and smarter than ever before.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
