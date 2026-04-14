import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PHP = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">PHP Development</h1>

				<p className="text-muted-foreground mb-4">
					Our PHP development services deliver production-ready server-side
					applications using modern PHP frameworks such as Laravel and Symfony.
					We focus on building modular, maintainable code that follows SOLID
					principles and industry best practices. Typical engagements include
					designing RESTful APIs, implementing robust authentication and role
					based access control, optimizing database interactions for scale, and
					integrating with third-party services (payments, email providers,
					analytics). Every project includes automated tests, CI/CD pipelines,
					and performance monitoring so your application is reliable in
					production.
				</p>

				<p className="text-muted-foreground mb-6">
					We also help modernize legacy PHP applicationsâ€”refactoring monoliths
					into well-structured services, introducing caching and query
					optimization, and lifting deployment to container platforms. Our goal
					is to reduce technical debt while delivering measurable improvements
					in performance, security, and developer velocity.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img loading="lazy" src="https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80" alt="PHP development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Engineering and product collaborating on backend priorities.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Modernization Value</p>
						<p className="text-muted-foreground">Legacy systems are gradually modernized without disrupting active business workflows.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Code Quality</p>
						<p className="text-muted-foreground">SOLID patterns, test coverage, and deployment guardrails improve maintainability over time.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default PHP;



