import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Email = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 sm:py-16 px-4 sm:px-6 space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Email Marketing</h1>
        <p className="text-muted-foreground leading-relaxed break-words">
          Email campaigns that convert: list segmentation, automated flows, newsletters, and deliverability optimisation to increase LTV.
          We design flows to onboard users, recover carts, and re-engage dormant customers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4">
          <img src="/assets/ios-bg.svg" alt="Email campaigns" className="w-full h-52 sm:h-64 rounded-lg shadow object-cover" />
          <img src="/assets/flutter-bg.svg" alt="Automation" className="w-full h-52 sm:h-64 rounded-lg shadow object-cover" />
        </div>

        <section>
          <h2 className="text-lg sm:text-xl font-semibold">What we do</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2">
            <li>Lifecycle & automated email flows (welcome, onboarding, cart recovery)</li>
            <li>Advanced segmentation, personalization and dynamic content</li>
            <li>Deliverability improvements, domain warmup, and inbox monitoring</li>
          </ul>

          <h3 className="text-base sm:text-lg font-semibold mt-4">Measurement & growth</h3>
          <p className="text-muted-foreground leading-relaxed">
            We track deliverability, open rate, CTR, conversion rate and revenue per recipient. Program optimisations
            are driven by cohort analysis and A/B testing.
          </p>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex w-full sm:w-auto justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg shadow-lg transition-transform hover:scale-[1.02]"
            >
              Schedule an email strategy call
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Email;
