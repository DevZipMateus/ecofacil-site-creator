import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
      setIsMobileMenuOpen(false);
    }
  };
  const menuItems = [{
    label: "Início",
    id: "hero",
    path: "/"
  }, {
    label: "Sobre",
    id: "about",
    path: "/"
  }, {
    label: "Serviços",
    id: "services",
    path: "/"
  }, {
    label: "Contato",
    id: "contact",
    path: "/"
  }];

  const handleMenuClick = (path: string, id: string) => {
    if (path === "/") {
      window.location.href = `/${id === "hero" ? "" : `#${id}`}`;
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-medium" : "shadow-sm"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Ecofácil Loja e Consultoria Ambiental" className="h-24 sm:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map(item => (
              <button 
                key={item.id} 
                onClick={() => handleMenuClick(item.path, item.id)} 
                className="text-foreground hover:text-primary font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <Link to="/vitrine" className="text-foreground hover:text-primary font-medium transition-colors relative group">
              Vitrine
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
            <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm">
                Entre em contato
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors" aria-label="Menu">
            {isMobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {menuItems.map(item => (
                <button 
                  key={item.id} 
                  onClick={() => {
                    handleMenuClick(item.path, item.id);
                    setIsMobileMenuOpen(false);
                  }} 
                  className="text-left py-2 px-4 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg font-medium transition-all"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/vitrine" onClick={() => setIsMobileMenuOpen(false)} className="text-left py-2 px-4 text-foreground hover:text-primary hover:bg-accent/10 rounded-lg font-medium transition-all">
                Vitrine
              </Link>
              <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button variant="default" className="w-full">
                  Entre em contato
                </Button>
              </a>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;