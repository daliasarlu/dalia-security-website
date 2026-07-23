import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: "Caméras de surveillance", href: "#services" },
      { label: "Tracking GPS", href: "#services" },
      { label: "Installation", href: "#services" },
      { label: "Support 24/7", href: "#services" }
    ],
    Entreprise: [
      { label: "À propos", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" }
    ],
    Légal: [
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Politique de confidentialité", href: "#" },
      { label: "Mentions légales", href: "#" },
      { label: "Cookies", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <img 
                  src="/images/logo-dalia-security_0dd25dcf.png" 
                  alt="Dalia Security"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Dalia Security</h3>
                <p className="text-xs opacity-80">Solutions de Sécurité</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Surveillance professionnelle et tracking GPS pour sécuriser vos biens, vos véhicules et votre tranquillité d'esprit.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-accent/20 hover:bg-accent/30 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator className="bg-primary-foreground/20 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © {currentYear} Dalia Security. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm opacity-80">
              📞 +225 0747487868
            </p>
            <p className="text-sm opacity-80">
              📧 info@dalia-security.net
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
