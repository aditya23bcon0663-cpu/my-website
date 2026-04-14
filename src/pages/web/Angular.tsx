import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Angular = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">AngularJS Development</h1>

				<p className="text-muted-foreground mb-4">
					Our Angular services are aimed at building enterprise-grade single
					page applications with scalable architecture. We structure apps
					using NgModules and feature-based folders, implement lazy-loaded
					routes, and apply best practices for change detection and state
					management. Accessibility and progressive enhancement are integral to
					every project, and performance is tuned through bundle splitting and
					runtime optimizations.
				</p>

				<p className="text-muted-foreground mb-6">
					We also provide testing strategies (unit, integration, and E2E), CI
					pipelines, and deployment patterns that fit enterprise release
					cycles. The result is a maintainable codebase that teams can extend
					over long lifecycles.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img loading="lazy" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80" alt="Angular development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Frontend team reviewing components and user journeys.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Frontend Architecture</p>
						<p className="text-muted-foreground">Feature modules, route-level splitting, and strong typing improve long-term maintainability.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">UX Stability</p>
						<p className="text-muted-foreground">Performance audits and accessibility checks keep enterprise interfaces smooth and inclusive.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Angular;



