import { Button } from "@/components/ui/button";
import { Leaf, Sparkles, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/70" />
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in">
            <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            <span className="text-white text-xs sm:text-sm font-medium">Buscando soluções eficaz</span>
          </div>

          {/* H1 - Company Name (SEO) */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in px-4">
            Ecofácil Loja e Consultoria Ambiental
          </h1>

          {/* H2 - Description (SEO) */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 sm:mb-8 leading-relaxed animate-fade-in px-4" style={{ animationDelay: "0.2s" }}>
            Produtos de limpeza, embalagens e consultoria ambiental com qualidade e sustentabilidade
          </h2>

          <p className="text-base sm:text-lg text-white/80 mb-8 sm:mb-12 max-w-2xl mx-auto animate-fade-in px-4" style={{ animationDelay: "0.4s" }}>
            Unindo economia, eficiência e respeito ao meio ambiente para um futuro mais limpo e equilibrado
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                <Sparkles className="w-5 h-5" />
                Fale conosco
              </Button>
            </a>
            <Button
              variant="hero"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <Shield className="w-5 h-5" />
              Conheça nossos serviços
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 animate-fade-in px-4" style={{ animationDelay: "0.8s" }}>
            {[
              { icon: Leaf, title: "Sustentável", desc: "Compromisso ambiental" },
              { icon: Shield, title: "Qualidade", desc: "Produtos certificados" },
              { icon: Sparkles, title: "Eficiência", desc: "Soluções completas" },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-all duration-300"
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-2 sm:mb-3 mx-auto" />
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
