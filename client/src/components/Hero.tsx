import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-28 bg-gradient-to-b from-white to-muted/30">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-sm font-medium text-accent">Leader en Côte d'Ivoire</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Sécurité intelligente
              <span className="text-accent"> pour tous</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
              Solutions complètes de surveillance et tracking GPS pour protéger vos biens et véhicules. 
              <span className="font-semibold text-primary">Dalia Security</span> : votre partenaire de confiance.
            </p>

            {/* Features List */}
            <div className="flex flex-col gap-3">
              {[
                "Installation professionnelle rapide",
                "Support technique 24/7",
                "Technologie haut de gamme"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                  </div>
                  <span className="text-sm md:text-base text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://www.sinotrack.com" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="text-cta bg-primary hover:bg-primary/90 text-white gap-2 group"
                >
                  Se connecter
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                En savoir plus
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Decorative border accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-primary to-transparent" />
              <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-accent via-primary to-transparent" />
              
              <img
                src="/images/hero-surveillance-center_8136ffae.png"
                alt="Centre de surveillance Technosurveillance"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-border max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Shield size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-primary">Sécurité Premium</p>
                  <p className="text-xs text-foreground/60">Technologie de pointe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
