import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PythonWeb = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">Python Web Development</h1>

				<p className="text-muted-foreground mb-4">
					We build reliable backend systems and APIs using Python frameworks
					like Django and Flask. Our approach emphasizes clear data models,
					secure authentication, and scalable background processing for jobs
					and ETL workflows. We design database schemas for performance, add
					caching layers where needed, and implement observability so issues
					are quickly detectable in production.
				</p>

				<p className="text-muted-foreground mb-6">
					Whether you need a content-driven site, an API layer for mobile
					applications, or heavy data-processing pipelines, we provide
					architected solutions with automated testing, CI/CD, and cloud
					deployments tuned for cost and reliability.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" alt="Python web development" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Data and engineering teams aligning on platform outcomes.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Backend Strength</p>
						<p className="text-muted-foreground">Django/Flask services are structured for secure APIs, async tasks, and clean data modeling.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Reliability Flow</p>
						<p className="text-muted-foreground">Logging, alerting, and performance checks are integrated from early development stages.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default PythonWeb;



