import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const IOS = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">iOS App Development</h1>
          <p className="text-muted-foreground mb-4">Native iOS apps built with Swift and SwiftUI, focusing on polished UX, performance, and App Store readiness.</p>
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
          <img loading="lazy" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="iPhone development" className="w-full service-photo-lg rounded-lg shadow-lg object-cover" />
          <img loading="lazy" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="App Store release" className="w-full service-photo-lg rounded-lg shadow-lg object-cover" />
        </div>
        <div className="md:w-1/2">
          <img loading="lazy" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80" alt="iOS illustration" className="w-full service-photo-lg rounded-lg shadow-lg object-cover" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IOS;



