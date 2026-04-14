import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Wearable = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Wearable Apps</h1>
          <p className="text-muted-foreground mb-4 leading-relaxed">We design wearable experiences that feel effortless in motion, balancing sensor intelligence, comfort, and battery-friendly performance.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>WatchOS/WearOS companion apps</li>
            <li>Sensor and health integrations</li>
            <li>Minimal, glanceable UIs</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">Design considerations</h2>
          <p className="text-muted-foreground mt-2">Focus on glanceability, minimal interactions, efficient background processing, and conservative network/sensor usage to extend battery life.</p>

          <h2 className="text-xl font-semibold mt-4">Testing & validation</h2>
          <p className="text-muted-foreground mt-2">We test on real wearable hardware and use automated regression suites for companion sync, sensor accuracy, and battery drain metrics.</p>
        </div>
        <div className="md:w-1/2">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" alt="Wearable illustration" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Wearable feature planning between product and engineering.</p>
          </div>
        </div>
      </main>
      <section className="max-w-4xl mx-auto px-6 mt-8">
        <h2 className="text-2xl font-semibold mb-3">Privacy & data accuracy</h2>
        <p className="text-muted-foreground mb-4">When building health or sensor-driven features we prioritize transparent consent, secure data handling, and robust sensor calibration to ensure reliable data for users and clinicians.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80" alt="Wearable engineering" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Hardware + app integration huddle in office.</p>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80" alt="Wearable testing" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">User testing insights captured in real time.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Sensor Intelligence</p>
            <p className="text-muted-foreground">Context-aware notifications and low-power telemetry pipelines are designed together.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">User Comfort</p>
            <p className="text-muted-foreground">We optimize interaction length, glanceability, and visual clarity for wearable-first behavior.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Wearable;



