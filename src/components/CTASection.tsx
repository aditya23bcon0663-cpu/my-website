import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="cta-gradient rounded-2xl border border-primary/10 p-12 md:p-20 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Glow line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Ready to <span >Get Started?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of businesses already transforming their infrastructure with Aselea Network.
          </p>
          <Button asChild size="lg" className="text-base px-10 py-6 glow-border group hover-scale">
            <Link to="/apply">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="ml-4 text-base px-8 py-6 border-border/60 hover:bg-secondary/50 hover-scale">
            <a href="#learn-more">Learn More</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
