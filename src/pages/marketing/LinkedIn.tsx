import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LinkedIn = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6 space-y-6">
        <h1 className="text-3xl font-bold">LinkedIn Marketing</h1>
        <p className="text-muted-foreground">B2B-focused LinkedIn campaigns to drive leads, partnerships, and thought leadership — sponsored content, InMail, and account-based strategies. We help teams reach decision-makers with precision and measurable pipeline outcomes.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <img src="/assets/ios-bg.svg" alt="LinkedIn ads" className="w-full rounded-lg shadow" />
          <img src="/assets/rn-bg.svg" alt="B2B creative" className="w-full rounded-lg shadow" />
        </div>

        <section>
          <h2 className="text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Account-based marketing & targeted lead generation</li>
            <li>Sponsored content & executive thought leadership programs</li>
            <li>Lead nurturing, SDR alignment, and pipeline attribution</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Deliverables & KPIs</h3>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Account lists, creative assets, and outreach sequences</li>
            <li>KPIs: Lead volume, meetings booked, CPL, pipeline influenced</li>
          </ul>

          <p className="text-muted-foreground mt-4">We often pair LinkedIn with nurture email sequences to move leads through qualification faster.</p>
          <div className="mt-12 text-center">
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">Talk to our B2B team</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LinkedIn;
