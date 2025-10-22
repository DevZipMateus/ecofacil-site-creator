import { Phone, Mail, MapPin, Instagram, Facebook, Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const quickLinks = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Ecofácil Logo" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="font-bold text-lg">Ecofácil</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Loja e Consultoria Ambiental comprometida com sustentabilidade e qualidade.
            </p>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Buscando soluções eficaz</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Links rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://wa.me/5554996603057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>(54) 99966-0357</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:ecofacilcomercioeconsultoria@gmail.com"
                  className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-words">ecofacilcomercioeconsultoria@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Rua Belo Horizonte, nº 850, Bairro Nossa Senhora Aparecida, Tio Hugo/RS</span>
              </li>
            </ul>
          </div>

          {/* Social Media & Hours */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Redes sociais</h4>
            <div className="space-y-3">
              <a
                href="https://instagram.com/ecofacil_comercio_consultoria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://facebook.com/EcofacilLojaConsultoriaAmbiental"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors text-sm group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
            </div>

            <div className="pt-4">
              <h5 className="font-semibold text-sm mb-2">Horário</h5>
              <div className="text-primary-foreground/80 text-xs space-y-1">
                <p>Seg - Sex: 08:30 às 18:30</p>
                <p>Sábado: 08:30 às 12:30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>© {new Date().getFullYear()} Ecofácil Loja e Consultoria Ambiental. Todos os direitos reservados.</p>
            <p className="text-xs">CNPJ: 61.494.458/0001-39</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
