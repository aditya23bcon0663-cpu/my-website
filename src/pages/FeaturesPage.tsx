import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Features />
      <Services />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
