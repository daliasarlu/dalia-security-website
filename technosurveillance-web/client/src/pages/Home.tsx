import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Page d'accueil Technosurveillance
 * 
 * Design: Sécurité Dynamique
 * - Bleu marine profond + Or/Cuivre
 * - Typographie Poppins (display) + Inter (body)
 * - Layout asymétrique avec sections alternées
 * - Animations fluides et transitions
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <Hero />
        <Services />
        <Products />
        <Benefits />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
