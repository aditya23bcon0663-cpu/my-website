import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SMO = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        <h1 className="text-3xl font-bold">Social Media Optimisation (SMO)</h1>
        <p className="text-muted-foreground">SMO improves your organic presence across platforms — content strategy, posting cadence, community management, and conversion-focused social landing pages. We focus on building long-term engagement and amplifying paid efforts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="/assets/flutter-bg.svg" alt="SMO" className="w-full rounded-lg shadow" />
          <img src="/assets/cross-bg.svg" alt="Community" className="w-full rounded-lg shadow" />
        </div>

        <section>
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Organic content strategy, calendars, and UGC programs</li>
            <li>Community engagement, moderation, and reputation management</li>
            <li>Social landing pages, link-in-bio funnels, and conversion tracking</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Metrics we track</h3>
          <p className="text-muted-foreground">Follower growth, engagement rate, organic impressions, and traffic to campaign landing pages. We pair these with conversions to evaluate true impact.</p>

          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">Discuss an organic strategy</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMO;
