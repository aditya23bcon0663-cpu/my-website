import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Android = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main
        className="max-w-4xl mx-auto py-20 px-6"
        style={{
          backgroundImage: "url('/assets/android-bg-1.svg'), url('/assets/android-bg-2.svg')",
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundPosition: 'left top, right bottom',
          backgroundSize: '320px 320px, 340px 340px',
        }}
      >
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Android App Development</h1>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We craft native Android products that feel fast, thoughtful, and dependable from the very first tap.
          Using Kotlin, Jetpack, and modern architecture (MVVM + Clean Architecture), we deliver production-ready
          apps your team can scale confidently across devices, regions, and release cycles.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">What we deliver</h2>
            <ul className="list-disc list-inside mt-2 text-muted-foreground">
              <li>Native Kotlin apps with Jetpack Compose UIs</li>
              <li>Modular architecture, CI, and automated testing</li>
              <li>Deep platform integrations (notifications, sensors, background work)</li>
              <li>Play Store packaging, release management, and analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">When to choose native Android</h2>
            <p className="text-muted-foreground mt-2">
              Choose native Android when you need the best performance, fine-grained
              platform control, or complex integrations with system services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Our process</h2>
            <ol className="list-decimal pl-5 text-muted-foreground mt-2 space-y-2">
              <li>Discovery & requirements â€” define goals, user journeys, and success metrics.</li>
              <li>Architecture & design â€” propose modular architecture and prototypes with Compose/UIKit where applicable.</li>
              <li>Implementation â€” iterative sprints with CI, code reviews, and automated tests.</li>
              <li>Release & monitoring â€” Play Store release, crash analytics, and performance tuning.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Technology & tooling</h2>
            <p className="text-muted-foreground mt-2">Kotlin, Jetpack Compose, Coroutines, Hilt/Dagger, WorkManager, Firebase/Crashlytics, Gradle, and Play Console for releases.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Case study</h2>
            <p className="text-muted-foreground mt-2">Built a location-aware logistics app that reduced delivery times by 18% and improved offline reliability across 200+ device models.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Get started</h2>
            <p className="text-muted-foreground mt-2">
              Contact us to discuss scope, timelines, and an initial technical
              proposal tailored to your product goals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Performance & testing</h2>
            <p className="text-muted-foreground mt-2">
              We run performance budgets, measure jank and startup time, and use
              profiling tools to optimize CPU, memory and rendering. Automated
              UI tests and real-device farms help us ensure consistent behaviour
              across popular manufacturers and Android versions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Security & privacy</h2>
            <p className="text-muted-foreground mt-2">
              We follow best practices for secure storage, network encryption,
              and permission minimization, and can help with GDPR-compliant
              analytics and user-consent flows.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Localization & device support</h2>
            <p className="text-muted-foreground mt-2">
              Our apps support multiple locales, dynamic layout for different
              screen sizes, and fallbacks for older API levels to reach broad
              audiences while preserving a great user experience.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Android development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Sprint planning with Android engineers in action.</p>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Device testing" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-medium text-white">Real-device QA and release readiness review.</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg border border-border/50 bg-card/40 p-3">
              <p className="font-medium">Delivery Snapshot</p>
              <p className="text-muted-foreground">Typical cycle: discovery to first beta in 4-6 weeks with weekly stakeholder demos.</p>
            </div>
            <div className="rounded-lg border border-border/50 bg-card/40 p-3">
              <p className="font-medium">Tech Focus</p>
              <p className="text-muted-foreground">Kotlin + Jetpack, robust QA, and release management optimized for real-world Android fragmentation.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Android;



