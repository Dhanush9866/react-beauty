import { ArrowRight } from "lucide-react";
import hairImg from "@/assets/service-hair.jpg";
import skinImg from "@/assets/service-skin.jpg";
import mensImg from "@/assets/service-mens.jpg";
import nailsImg from "@/assets/service-nails.jpg";

const services = [
  { img: hairImg, title: "Hair Design", desc: "Precision cuts, coloring, and styling tailored to your persona." },
  { img: skinImg, title: "Skin Therapy", desc: "Advanced facials and skin treatments for a radiant glow." },
  { img: mensImg, title: "Men's Grooming", desc: "Classic shaves, beard sculpting, and modern fades." },
  { img: nailsImg, title: "Nail Artistry", desc: "Manicures and pedicures that define elegance." },
];

const BespokeServices = () => (
  <section className="py-20 bg-muted/50">
    <div className="container">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-2">Curated Experiences</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">Bespoke Services</h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          From precision cuts to revitalizing spa treatments, we offer a comprehensive suite of grooming services for everyone.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((s) => (
          <div key={s.title} className="group relative overflow-hidden rounded-2xl cursor-pointer">
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-72 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="font-heading text-lg font-semibold text-background">{s.title}</h3>
              <p className="text-background/70 text-xs mt-1 mb-3">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-accent">
                View Details <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BespokeServices;
