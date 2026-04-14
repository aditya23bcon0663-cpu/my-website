import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Flutter = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Flutter Development</h1>
          <p className="text-muted-foreground mb-4 leading-relaxed">From concept to launch, we shape Flutter apps that feel fluid, modern, and delightfully consistent across platforms.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Custom animations and skia-powered rendering</li>
            <li>Single codebase for mobile, web, and desktop</li>
            <li>Integration with native plugins when required</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6">Architecture & best practices</h2>
          <p className="text-muted-foreground mt-2">We structure apps with modular packages, separation of UI and business logic, and efficient state management (Riverpod/Provider/Bloc) to keep projects maintainable.</p>

          <h2 className="text-xl font-semibold mt-4">Performance</h2>
          <p className="text-muted-foreground mt-2">We optimize frame rates, reduce build methods, and use platform channels for heavy native tasks to ensure smooth animations and low jank.</p>
        </div>
        <div className="md:w-1/2">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Flutter illustration" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Developers pairing on Flutter feature architecture.</p>
          </div>
        </div>
      </main>

      <section className="max-w-4xl mx-auto px-6 mt-8">
        <h2 className="text-2xl font-semibold mb-3">Maintainability & scaling</h2>
        <p className="text-muted-foreground mb-4">We structure Flutter code into feature packages, write widget and integration tests, and provide CI checks to keep apps maintainable as teams grow. Our approach includes code reviews, performance budgets and documented release processes.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80" alt="Flutter UI" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">UI walkthrough and interaction polish session.</p>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Dart code" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Code review with product and engineering leads.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Build Velocity</p>
            <p className="text-muted-foreground">Reusable widgets and feature modules help teams ship faster across mobile and web targets.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Performance Handling</p>
            <p className="text-muted-foreground">Frame profiling, render optimization, and native bridges are used when high throughput is required.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flutter;



