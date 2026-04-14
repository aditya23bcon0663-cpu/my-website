import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Facebook = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        <h1 className="text-3xl font-bold">Facebook Marketing</h1>
        <p className="text-muted-foreground">We run data-driven Facebook campaigns focused on acquisition and retention — audience building, creative testing, and conversion optimization. Our campaigns combine precise targeting, scalable creative, and conversion tracking to reduce CAC and improve LTV.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="/assets/cross-bg.svg" alt="Facebook campaigns" className="w-full rounded-lg shadow" />
          <img src="/assets/flutter-bg.svg" alt="Ad creative" className="w-full rounded-lg shadow" />
        </div>

        <section>
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Audience research & segmentation (lookalike, custom audiences)</li>
            <li>Creative production & A/B testing (static, carousel, video)</li>
            <li>Performance retargeting funnels and conversion lift tests</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Deliverables & KPIs</h3>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Campaign set-up & reporting dashboard</li>
            <li>Weekly creative test report and winner rollout</li>
            <li>KPIs: CTR, CVR, CAC, ROAS (tailored to your goals)</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Example timeline</h3>
          <p className="text-muted-foreground">Week 1: research & setup. Weeks 2–4: creative tests. Month 2+: scale winners and iterate on retention funnels.</p>

          <div className="mt-4">
            <h3 className="font-semibold">Case note</h3>
            <p className="text-muted-foreground">In a recent campaign we reduced CAC by 32% while increasing conversion rate through product-focused creatives and tighter audience segmentation.</p>
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">Contact us to start a campaign</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Facebook;
