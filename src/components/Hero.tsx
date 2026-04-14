import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating orbs */}
      <div className="hidden sm:block absolute top-1/4 left-1/4 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-56 md:w-96 h-56 md:h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Scattered node dots */}
      {[
        { top: "15%", left: "10%" },
        { top: "30%", right: "15%" },
        { top: "60%", left: "20%" },
        { bottom: "25%", right: "25%" },
        { top: "20%", left: "60%" },
        { bottom: "40%", left: "8%" },
      ].map((pos, i) => (
        <div
          key={i}
          className="node-dot"
          style={{ ...pos, animationDelay: `${i * 0.5}s` }}
        />
      ))}

      <div className="relative z-10 container mx-auto px-6 text-center pt-20 sm:pt-24 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-sm text-primary font-medium">Next-Gen Infrastructure</span>
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight tracking-tight mb-6 text-balance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Building the Future
          <br />
          <span className="text-foreground">of Digital Networks</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-semibold text-foreground max-w-2xl mx-auto mb-4 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Build faster. Scale globally. Ship securely.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Empowering businesses with cutting-edge network solutions. Secure, scalable, and designed for the demands of tomorrow.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <Button asChild size="lg" className="text-base px-8 py-6 glow-border group hover-scale">
            <Link to="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base px-8 py-6 border-border/60 hover:bg-secondary/50 hover-scale">
            <a href="#learn-more">Learn More</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#learn-more"
        aria-label="Scroll to learn more"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
      </motion.a>
    </section>
  );
};

export default Hero;
