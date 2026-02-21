import { MapPin, Phone, Mail, Globe, Instagram, Share2 } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80 pt-16 pb-8">
    <div className="container grid md:grid-cols-4 gap-10 mb-12">
      <div>
        <h3 className="font-heading text-2xl font-bold text-background mb-3">VAIERA</h3>
        <p className="text-sm leading-relaxed text-background/60">
          A destination for those who seek perfection in every detail. Discover the intersection of luxury and expertise.
        </p>
        <div className="flex gap-3 mt-4">
          {[Globe, Instagram, Mail, Share2].map((Icon, i) => (
            <button key={i} className="w-8 h-8 rounded-full border border-background/20 flex items-center justify-center hover:bg-background/10 transition-colors">
              <Icon className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {["About Us", "Our Services", "Price List", "Book Online"].map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-accent transition-colors">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">Contact Us</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>Danavaipeta, Near Gandhi Park, Rajahmundry</span>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>+91 98765 43210</span>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span>hello@vaierasalon.com</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background mb-4">Hours</h4>
        <div className="flex items-start gap-2 text-sm">
          <span className="text-accent font-semibold">Daily Operations</span>
        </div>
        <p className="text-sm mt-1">Open from 7:00 AM</p>
        <p className="text-sm">Until 9:00 PM</p>
        <p className="text-accent text-xs mt-2">Open 7 days a week</p>
      </div>
    </div>

    <div className="container border-t border-background/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-background/40">
      <p>© 2024 Vaiera Unisex Salon. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-background/70 transition-colors uppercase tracking-wider">Privacy Policy</a>
        <a href="#" className="hover:text-background/70 transition-colors uppercase tracking-wider">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default Footer;
