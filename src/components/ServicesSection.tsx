import { Scissors, Sparkles, Hand, Flower2, Waves } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Care", desc: "Styling, Color & Spa" },
  { icon: Sparkles, title: "Skin Care", desc: "Glow & Rejuvenation" },
  { icon: Hand, title: "Pedicure", desc: "Foot Spa & Therapy" },
  { icon: Flower2, title: "Facial", desc: "Deep Cleanse & Detox" },
  { icon: Waves, title: "Waxing", desc: "Smooth Skin Finish" },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container text-center">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Our Services</h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-12">
        Tailored grooming and beauty treatments designed for the modern individual.
      </p>
      <div className="border-t border-border mb-12 max-w-xs mx-auto" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-foreground">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
