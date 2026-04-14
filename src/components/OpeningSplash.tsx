import { motion } from "framer-motion";

const OpeningSplash = () => {
  return (
    <motion.div
      className="opening-splash fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeInOut" } }}
      role="status"
      aria-label="Loading website"
    >
      <div className="opening-splash-grid absolute inset-0" aria-hidden="true" />
      <div className="opening-splash-orb opening-splash-orb-cyan" aria-hidden="true" />
      <div className="opening-splash-orb opening-splash-orb-violet" aria-hidden="true" />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="text-primary uppercase tracking-[0.35em] text-xs font-semibold mb-4">Aselea Network</p>
        <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">Crafting Fast, Intelligent Experiences</h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base mb-7">
          Initializing services, routing edge nodes, and preparing your digital workspace.
        </p>

        <div className="w-64 sm:w-80 h-1.5 rounded-full bg-secondary/70 overflow-hidden mx-auto border border-border/50">
          <div className="opening-splash-progress h-full" />
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          <span className="opening-splash-dot" />
          <span className="opening-splash-dot" />
          <span className="opening-splash-dot" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OpeningSplash;
