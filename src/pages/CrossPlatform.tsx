import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CrossPlatform = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Cross-Platform Apps</h1>
          <p className="text-muted-foreground mb-4 leading-relaxed">One product, multiple platforms, and one aligned team. We build cross-platform apps with practical architecture choices that speed delivery without sacrificing quality.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Performance and native integration evaluation</li>
            <li>Shared business logic and platform adaptors</li>
            <li>CI/CD pipelines for multiple targets</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">When to choose cross-platform</h2>
          <p className="text-muted-foreground mt-2">Choose cross-platform when speed and shared code are priorities and platform-specific features are limited or can be bridged with native modules.</p>

          <h2 className="text-xl font-semibold mt-4">Delivery approach</h2>
          <ol className="list-decimal pl-5 text-muted-foreground mt-2 space-y-2">
            <li>Evaluate candidate frameworks against requirements.</li>
            <li>Prototype critical flows to validate performance and UX.</li>
            <li>Deliver in feature-based sprints and maintain single CI pipeline for all targets.</li>
          </ol>
        </div>
        <div className="md:w-1/2">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img loading="lazy" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80" alt="Cross platform illustration" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Shared roadmap discussion across iOS and Android tracks.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="group relative overflow-hidden rounded-lg">
                <img loading="lazy" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Cross platform team" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-2 left-2 text-xs font-medium text-white">Feature sync</p>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img loading="lazy" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80" alt="Prototype" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <p className="absolute bottom-2 left-2 text-xs font-medium text-white">UX review</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 text-sm">
              <div className="rounded-lg border border-border/50 bg-card/40 p-3">
                <p className="font-medium">Architecture Choice Notes</p>
                <p className="text-muted-foreground">Framework selection is based on native feature depth, performance constraints, and long-term maintainability.</p>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CrossPlatform;



