import { ShieldCheck, Scissors, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Unmatched Hygiene",
    desc: "We follow rigorous medical-grade sterilization protocols for every tool and station to ensure your safety and peace of mind.",
  },
  {
    icon: Scissors,
    title: "Expert Stylists",
    desc: "Our team consists of industry veterans who are masters of contemporary trends and timeless techniques.",
  },
  {
    icon: Award,
    title: "Premium Products",
    desc: "We exclusively use world-renowned professional brands to provide your hair and skin with the finest care possible.",
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="py-20 bg-background">
    <div className="container text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">The Vaiera Standard</p>
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">Why Our Guests Choose Us</h2>
      <div className="w-12 h-0.5 bg-primary mx-auto mb-12" />

      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-card border border-border rounded-2xl p-8 text-left hover:shadow-lg transition-shadow duration-300"
          >
            <r.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
