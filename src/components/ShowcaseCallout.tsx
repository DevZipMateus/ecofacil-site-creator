import { Button } from "@/components/ui/button";
import { Store, Package, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ShowcaseCallout = () => {
  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">Novidade</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Explore Nossa Vitrine Digital
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Navegue por nosso catálogo completo de produtos com preços atualizados e disponibilidade em tempo real
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Package className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Catálogo Completo</h3>
              <p className="text-white/70 text-sm">Todos os produtos disponíveis</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Store className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Preços Atualizados</h3>
              <p className="text-white/70 text-sm">Valores sempre em dia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-white mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Fácil Navegação</h3>
              <p className="text-white/70 text-sm">Encontre o que precisa rapidamente</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/vitrine">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
              >
                <Store className="w-6 h-6 mr-2" />
                Acessar Vitrine Digital
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseCallout;
