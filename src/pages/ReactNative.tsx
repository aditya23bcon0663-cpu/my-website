import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReactNative = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">React Native Development</h1>
          <p className="text-muted-foreground mb-4 leading-relaxed">We help web-first teams ship mobile confidently with React Native, blending fast iteration with native-quality experience.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Native components for performance-sensitive parts</li>
            <li>Shared UI and business logic with web teams</li>
            <li>Expo and custom native module support</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">Tooling & workflow</h2>
          <p className="text-muted-foreground mt-2">We use TypeScript, Metro bundler optimizations, Hermes engine where appropriate, and fast refresh for rapid development. CI pipelines include E2E tests and native build validations.</p>

          <h2 className="text-xl font-semibold mt-4">When to choose React Native</h2>
          <p className="text-muted-foreground mt-2">React Native is ideal when teams already have React expertise and want to maximize code reuse while allowing native modules for critical performance paths.</p>
        </div>
        <div className="md:w-1/2">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="React Native illustration" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Mobile squad planning sprint goals together.</p>
          </div>
        </div>
      </main>
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <h2 className="text-2xl font-semibold mb-3">Performance & native bridges</h2>
        <p className="text-muted-foreground mb-4">For performance-sensitive flows we implement native components and carefully profile bridge usage. We maintain a catalog of reusable native modules and monitor memory and CPU profiles during integration tests.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="React team" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Team sync on cross-platform release quality.</p>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="CI automation" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">CI/CD decisions happening live with engineers.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Team Efficiency</p>
            <p className="text-muted-foreground">Shared React expertise cuts ramp-up time and speeds feature delivery.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Release Reliability</p>
            <p className="text-muted-foreground">Automated CI checks and staged rollout strategy reduce regressions in production.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReactNative;



