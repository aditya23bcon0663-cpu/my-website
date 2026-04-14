import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import LearnMore from "@/components/LearnMore";
import About from "@/components/About";
import StatusPage from "@/components/StatusPage";
// Stats removed per request
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <StatusPage />
      <CTASection />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default Index;
