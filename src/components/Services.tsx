import { Sparkles, Package, FileText, Trash2, Box, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import serviceCleaning from "@/assets/service-cleaning.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Produtos de limpeza",
      description: "Linha completa de produtos de limpeza leve e pesada para todas as necessidades",
      gradient: "from-primary to-primary-light",
      image: serviceCleaning,
    },
    {
      icon: FileText,
      title: "Linha de papéis",
      description: "Papéis em geral para uso residencial, comercial e industrial",
      gradient: "from-accent to-primary",
      image: null,
    },
    {
      icon: Package,
      title: "Linha automotiva",
      description: "Produtos especializados para cuidados automotivos",
      gradient: "from-primary-light to-accent",
      image: null,
    },
    {
      icon: Trash2,
      title: "Sacos de lixo",
      description: "Diversas opções de sacos de lixo resistentes e práticos",
      gradient: "from-primary to-accent",
      image: null,
    },
    {
      icon: Box,
      title: "Embalagens",
      description: "Grande variedade de embalagens para diferentes aplicações",
      gradient: "from-accent to-primary-light",
      image: servicePackaging,
    },
    {
      icon: Leaf,
      title: "Consultoria ambiental",
      description: "Serviços especializados em gestão e consultoria ambiental",
      gradient: "from-primary-light to-primary",
      image: serviceConsulting,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Nossos serviços
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Trazendo qualidade e eficiência em cada produto e serviço
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto mb-8 sm:mb-12">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-6 sm:p-8">
                {service.image && (
                  <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex flex-col items-center text-center">
                  <div className={`p-3 sm:p-4 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-3xl mx-auto p-6 sm:p-8 md:p-12 shadow-medium bg-gradient-card">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-4">
              Precisa de uma solução específica?
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-base sm:text-lg px-4">
              Entre em contato conosco e descubra como podemos ajudar com produtos de qualidade e consultoria especializada
            </p>
            <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Fale com nossa equipe
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
