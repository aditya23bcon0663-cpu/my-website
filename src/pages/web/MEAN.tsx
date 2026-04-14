import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MEAN = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">MEAN Stack Development</h1>

				<p className="text-muted-foreground mb-4 leading-relaxed">
					The MEAN stack (MongoDB, Express, Angular, Node.js) offers a
					JavaScript-first approach that speeds development and reduces context
					switching for full-stack teams. We build scalable APIs with Node.js
					and Express, design document schemas and indexing strategies in
					MongoDB for reliable performance, and implement modular Angular
					frontends that are accessible and performant. Projects include
					realtime features, websockets, and robust deployment pipelines.
				</p>

				<p className="text-muted-foreground mb-6">
					Our MEAN projects emphasize observability, automated testing, and
					repeatable infrastructure so teams can ship quickly while maintaining
					stability. We also help with migration strategies for moving legacy
					systems to a modern MEAN architecture when appropriate.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img loading="lazy" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80" alt="MEAN stack" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Full-stack squad syncing backend and frontend milestones.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Full-Stack Alignment</p>
						<p className="text-muted-foreground">Shared JS ecosystem reduces context switching across backend and frontend teams.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Operational Clarity</p>
						<p className="text-muted-foreground">Production observability and rollout control are baked into the delivery process.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default MEAN;


