import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NodeJS = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Node.js Development</h1>

				<p className="text-muted-foreground mb-4">
					Our Node.js services focus on building fast, non-blocking backend
					systems designed for scale. We design microservices and APIs with a
					clear separation of concerns, using frameworks such as Express or
					NestJS. Emphasis is placed on observability, robust error handling,
					security best practices, and performance tuning for high-throughput
					workloads. Background workers, message queues, and streaming
					architectures are implemented where needed to meet throughput and
					latency goals.
				</p>

				<p className="text-muted-foreground mb-6">
					Deployments are container-first, with CI/CD, automated testing, and
					infrastructure as code to ensure consistent, repeatable releases.
					We also provide guidance on migrating monolithic Node apps to
					service-oriented or event-driven architectures to unlock scalability
					and resilience improvements.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img loading="lazy" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=1200&q=80" alt="Node.js development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Backend architects mapping APIs in a live office session.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Scalability Profile</p>
						<p className="text-muted-foreground">Event-driven APIs, worker queues, and monitoring are configured for high-throughput traffic.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Ops Integration</p>
						<p className="text-muted-foreground">CI pipelines, error budgets, and observability dashboards keep releases safe and traceable.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default NodeJS;



