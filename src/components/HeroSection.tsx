import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon.jpg";
import portraitImage from "@/assets/salon-portrait.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-0 min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Luxury salon interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/70 to-transparent" />
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-8 items-center py-20 md:py-0">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Premium Unisex Salon</span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
            Artistry in{" "}
            <em className="text-accent not-italic font-heading">Every Detail.</em>
          </h1>

          <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
            Experience world-class hair, skin, and grooming services tailored for the modern individual at Vaiera.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-sm uppercase tracking-wider font-semibold gap-2">
              <CalendarDays className="w-4 h-4" />
              Reserve Appointment
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-6 text-sm uppercase tracking-wider font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Services
            </Button>
          </div>
        </div>

        <div className="hidden md:flex justify-end relative">
          <div className="relative">
            <img
              src={portraitImage}
              alt="Premium salon service"
              className="w-80 lg:w-96 h-[420px] lg:h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-xl px-6 py-3 text-center shadow-lg">
              <span className="text-2xl font-heading font-bold">15+</span>
              <p className="text-xs font-semibold uppercase tracking-wider">Years of Mastery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
