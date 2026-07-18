import { Card } from "@/components/ui/card";
import { Camera, MapPin, Wrench, Clock } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Caméras de Surveillance",
    description: "Systèmes CCTV professionnels HD et 4K pour une surveillance cristalline de vos locaux 24/7.",
    features: ["Résolution 4K", "Vision nocturne", "Stockage cloud"]
  },
  {
    icon: MapPin,
    title: "Tracking GPS",
    description: "Suivi en temps réel de vos véhicules, motos et tricycles avec alertes instantanées.",
    features: ["Localisation live", "Historique de trajets", "Alertes géofence"]
  },
  {
    icon: Wrench,
    title: "Installation Professionnelle",
    description: "Nos techniciens experts installent et configurent vos systèmes avec précision.",
    features: ["Installation rapide", "Configuration optimale", "Tests complets"]
  },
  {
    icon: Clock,
    title: "Support & Maintenance",
    description: "Support technique 24/7 et maintenance régulière pour garantir vos systèmes.",
    features: ["Support 24/7", "Maintenance préventive", "Assistance rapide"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Nos Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Solutions de Sécurité Complètes
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services pour protéger vos biens et vos véhicules.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent" />

                <div className="p-6 flex flex-col gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-2 pt-2">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        <span className="text-xs text-foreground/60">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
