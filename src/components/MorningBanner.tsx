import { Sun } from "lucide-react";

const MorningBanner = () => (
  <section className="bg-primary text-primary-foreground">
    <div className="container flex flex-col sm:flex-row items-center justify-between py-5 gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <Sun className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h3 className="font-heading font-semibold text-lg">Morning Self-Care</h3>
          <p className="text-primary-foreground/70 text-sm">Start your day fresh. We open early at 7:00 AM every day.</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-heading text-3xl font-bold tracking-wider">07:00 AM</span>
        <span className="text-xs uppercase tracking-widest font-semibold border-l border-primary-foreground/30 pl-4">Doors Open</span>
      </div>
    </div>
  </section>
);

export default MorningBanner;
