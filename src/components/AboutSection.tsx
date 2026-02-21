import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-salon.jpg";
import portraitImg from "@/assets/salon-portrait.jpg";

const highlights = [
  "World-class hygiene standards",
  "Expert certified stylists",
  "Premium global brands",
];

const AboutSection = () => (
  <section className="py-20 bg-muted/50">
    <div className="container grid md:grid-cols-2 gap-12 items-center">
      <div className="flex gap-4">
        <div className="w-1/2">
          <img
            src={aboutImg}
            alt="Salon service"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
          />
          <div className="mt-2 bg-primary text-primary-foreground rounded-lg px-4 py-2 text-center text-sm font-medium">
            Salon Service
          </div>
        </div>
        <div className="w-1/2 mt-8">
          <img
            src={portraitImg}
            alt="Beauty portrait"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Hygiene Meets{" "}
          <em className="text-accent not-italic font-heading">Excellence</em>
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Located conveniently near <strong className="text-foreground">Gandhi Park</strong>, Vaiera Salon is more than just a grooming center. We are a unisex sanctuary dedicated to providing the highest quality of service.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our commitment to hygiene is unwavering. Every tool is sterilized, every product is premium, and every stylist is trained to deliver a bespoke experience tailored to your unique personality.
        </p>
        <ul className="space-y-3 pt-2">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              <span className="text-foreground font-medium">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
