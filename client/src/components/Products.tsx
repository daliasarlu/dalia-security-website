import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Caméra Dôme 4K",
    category: "Surveillance",
    description: "Caméra dôme haute résolution avec vision nocturne avancée",
    image: "/images/camera-installation-service_b327432e.png",
    features: ["4K Ultra HD", "Vision nocturne IR", "Zoom optique 30x"],
    price: "À partir de 150,000 FCFA"
  },
  {
    name: "Tracker GPS Pro",
    category: "Tracking",
    description: "Suivi GPS en temps réel pour véhicules et motos",
    image: "/images/gps-tracking-dashboard_4ad44fe4.png",
    features: ["Localisation live", "Alertes géofence", "Historique 12 mois"],
    price: "À partir de 50,000 FCFA"
  },
  {
    name: "Système Complet",
    category: "Bundle",
    description: "Solution intégrée caméras + GPS + monitoring",
    image: "/images/security-benefits-abstract_6d1c5e16.png",
    features: ["4 caméras 4K", "2 trackers GPS", "Monitoring 24/7"],
    price: "À partir de 500,000 FCFA"
  }
];

export default function Products() {
  return (
    <section id="produits" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-sm font-medium text-accent">Nos Produits</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Équipements Haut de Gamme
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Découvrez nos solutions de surveillance et tracking les plus populaires.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <Card
              key={idx}
              className="group overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Badge */}
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {product.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 flex-grow">
                {/* Title */}
                <h3 className="text-xl font-semibold text-primary">{product.name}</h3>

                {/* Description */}
                <p className="text-sm text-foreground/70">{product.description}</p>

                {/* Features */}
                <div className="flex flex-col gap-2">
                  {product.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-xs text-foreground/60">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex flex-col gap-3 pt-4 mt-auto border-t border-border">
                  <p className="font-semibold text-primary">{product.price}</p>
                  <Button 
                    variant="outline"
                    className="w-full border-accent text-accent hover:bg-accent/10 group/btn"
                  >
                    Demander un devis
                    <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
