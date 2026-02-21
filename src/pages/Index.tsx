import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MorningBanner from "@/components/MorningBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BespokeServices from "@/components/BespokeServices";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MorningBanner />
    <ServicesSection />
    <AboutSection />
    <WhyChooseUs />
    <BespokeServices />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
