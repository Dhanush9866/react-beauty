import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20 bg-primary text-primary-foreground">
    <div className="container text-center max-w-2xl mx-auto space-y-6">
      <h2 className="font-heading text-4xl md:text-5xl font-bold">Ready to redefine your style?</h2>
      <p className="text-primary-foreground/70 text-lg">
        Join us at Vaiera for an unparalleled grooming journey where your satisfaction is our only metric of success.
      </p>
      <Button
        variant="outline"
        className="rounded-full px-10 py-6 text-sm uppercase tracking-widest font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary mt-4"
      >
        Secure Your Appointment
      </Button>
    </div>
  </section>
);

export default CTASection;
