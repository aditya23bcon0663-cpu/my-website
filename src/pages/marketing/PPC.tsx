import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PPC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        <h1 className="text-3xl font-bold">PPC (Paid Ads)</h1>
        <p className="text-muted-foreground">We create and manage paid campaigns across search and social — strategy, bidding, creative testing, and ROI-driven optimisation. Our approach blends creative testing with bid automation and analytics to drive predictable growth.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="/assets/flutter-bg.svg" alt="PPC dashboard" className="w-full rounded-lg shadow" />
          <img src="/assets/cross-bg.svg" alt="Ad creative" className="w-full rounded-lg shadow" />
        </div>

        <section>
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Search & social campaign setup, structure, and tracking</li>
            <li>Conversion tracking, attribution modeling, and ROAS optimisation</li>
            <li>Creative testing, scaling playbooks, and audience expansion</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Reporting & expectations</h3>
          <p className="text-muted-foreground">Weekly reports with spend, ROAS, CPA and suggested optimisations. We focus on scaling channels that hit target ROAS and funnel improvements for cost-efficiency.</p>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">Start a paid program</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PPC;
