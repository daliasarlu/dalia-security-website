import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Accueil", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Produits", href: "#produits" },
    { label: "Avantages", href: "#avantages" },
    { label: "Contact", href: "#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "#") return location === "/";
    return location.includes(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <img 
              src="/manus-storage/logo-dalia-security_0dd25dcf.png" 
              alt="Dalia Security Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-xl font-bold text-primary">Dalia Security</h1>
            <p className="text-xs text-muted-foreground">Solutions de Sécurité</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block flex-shrink-0">
          <a href="https://www.sinotrack.com" target="_blank" rel="noopener noreferrer">
            <Button className="text-cta bg-primary hover:bg-primary/90 text-white">
              Se connecter
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://www.sinotrack.com" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="text-cta w-full bg-primary hover:bg-primary/90 text-white mt-2">
                Se connecter
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
