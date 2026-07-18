import { Card } from "@/components/ui/card";
import { Zap, Award, Users } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Fiabilité Garantie",
    description: "Systèmes testés et certifiés avec garantie complète. Nos installations fonctionnent 24/7 sans interruption.",
    highlight: "99.9% de disponibilité"
  },
  {
    icon: Zap,
    title: "Innovation Technologique",
    description: "Équipements dernière génération avec IA et machine learning pour une détection intelligente.",
    highlight: "Technologie 2026"
  },
  {
    icon: Users,
    title: "Support Professionnel",
    description: "Équipe d'experts disponible 24/7 pour vous assister. Réponse rapide et solutions efficaces.",
    highlight: "Support sans limite"
  }
];

export default function Benefits() {
  return (
    <section id="avantages" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Pourquoi Technosurveillance</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nos Avantages
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nous nous engageons à offrir les meilleures solutions de sécurité du marché.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={idx}
                className="group relative overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative p-8 flex flex-col gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/20 transition-colors">
                    <Icon size={32} className="text-accent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-primary">{benefit.title}</h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Highlight */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-accent">{benefit.highlight}</p>
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
