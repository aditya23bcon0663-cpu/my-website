import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UIUX = () => {
	return (
		<div className="min-h-screen">
			<Navbar />
			<main className="max-w-4xl mx-auto py-20 px-6">
				<h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">UI/UX Design</h1>

				<p className="text-muted-foreground mb-4">
					Our UI/UX services combine user research, interaction design, and
					visual systems to create intuitive products that solve real user
					problems. We run discovery workshops to map user journeys, produce
					low- and high-fidelity prototypes, and conduct usability testing to
					validate assumptions. Design handoffs include component-ready assets
					and documentation to speed implementation while preserving design
					intent.
				</p>

				<p className="text-muted-foreground mb-6">
					We emphasize accessibility, performance, and consistency: our design
					systems make it easy for engineering teams to reuse components, and
					our research-informed approach ensures the product meets user needs
					and business metrics.
				</p>

				<div className="group relative overflow-hidden rounded-lg shadow-lg">
					<img loading="lazy" src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80" alt="UI UX" className="w-full h-full service-photo-lg object-cover transition-transform duration-500 group-hover:scale-105" />
					<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
					<p className="absolute bottom-3 left-3 text-sm font-medium text-white">Design critique in progress with product stakeholders.</p>
				</div>
				<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Design Research</p>
						<p className="text-muted-foreground">User interviews, flow mapping, and usability validation shape each interface decision.</p>
					</div>
					<div className="rounded-lg border border-border/50 bg-card/40 p-3">
						<p className="font-medium">Handoff Quality</p>
						<p className="text-muted-foreground">Component specs and interaction notes reduce ambiguity between design and engineering.</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default UIUX;



