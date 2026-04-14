import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IOS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">iOS App Development</h1>
          <p className="text-muted-foreground mb-4 leading-relaxed">We design iOS experiences that look premium and feel effortless, built with Swift and SwiftUI for performance, reliability, and App Store confidence.</p>
          <ul className="list-disc pl-5 text-muted-foreground space-y-2">
            <li>Swift & SwiftUI implementations</li>
            <li>TestFlight and App Store releases</li>
            <li>WatchOS and iPad optimizations</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Process</h2>
          <p className="text-muted-foreground mt-2">We run design sprints, build SwiftUI prototypes, and validate performance on real devices before scaling tests across multiple OS versions.</p>

          <h2 className="text-xl font-semibold mt-4">Tech & integrations</h2>
          <p className="text-muted-foreground mt-2">Swift, Combine, SwiftUI, CoreData/Realm, CloudKit, App Clips, and TestFlight automation integrated with CI workflows.</p>
        </div>
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Quality & device matrix</h2>
          <p className="text-muted-foreground mt-2">We validate apps on a curated device matrix, run accessibility audits, and optimize for battery and memory to provide a smooth iOS experience across iPhone and iPad models.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="iPhone development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">iOS product workshop with design and engineering.</p>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80" alt="App Store release" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Release planning and App Store go-live prep.</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">App Store Readiness</p>
            <p className="text-muted-foreground">We include compliance checks, review-safe metadata, and release checklists before submission.</p>
          </div>
          <div className="rounded-lg border border-border/50 bg-card/40 p-3">
            <p className="font-medium">Experience Quality</p>
            <p className="text-muted-foreground">Device-specific optimization, accessibility audits, and smooth UI transitions are prioritized.</p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img loading="lazy" src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" alt="iOS illustration" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Hands-on team collaboration for iOS feature delivery.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IOS;



