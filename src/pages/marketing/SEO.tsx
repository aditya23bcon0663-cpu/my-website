import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SEO = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        <h1 className="text-3xl font-bold">Search Engine Optimisation (SEO)</h1>
        <p className="text-muted-foreground">SEO increases organic visibility — technical audits, on-page optimisation, content strategy, and backlink development to drive sustainable traffic. We prioritise revenue-generating keywords and measurable content funnels.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="/assets/ios-bg.svg" alt="SEO audit" className="w-full rounded-lg shadow" />
          <img src="/assets/cross-bg.svg" alt="Content strategy" className="w-full rounded-lg shadow" />
        </div>

        <section>
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Full technical SEO audits and remediation plan</li>
            <li>Content planning, pillar pages, and conversion-focused landing pages</li>
            <li>Quality backlink outreach and partnership development</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Deliverables & timeline</h3>
          <p className="text-muted-foreground">Initial audit and roadmap (2–3 weeks), then prioritized implementation and content cadence. We track organic traffic, keyword rankings, and goal conversions.</p>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">Request an SEO audit</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
