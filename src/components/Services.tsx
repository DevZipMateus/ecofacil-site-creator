import { Sparkles, Package, FileText, Trash2, Box, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: "Produtos de limpeza",
      description: "Linha completa de produtos de limpeza leve e pesada para todas as necessidades",
      gradient: "from-primary to-primary-light",
    },
    {
      icon: FileText,
      title: "Linha de papéis",
      description: "Papéis em geral para uso residencial, comercial e industrial",
      gradient: "from-accent to-primary",
    },
    {
      icon: Package,
      title: "Linha automotiva",
      description: "Produtos especializados para cuidados automotivos",
      gradient: "from-primary-light to-accent",
    },
    {
      icon: Trash2,
      title: "Sacos de lixo",
      description: "Diversas opções de sacos de lixo resistentes e práticos",
      gradient: "from-primary to-accent",
    },
    {
      icon: Box,
      title: "Embalagens",
      description: "Grande variedade de embalagens para diferentes aplicações",
      gradient: "from-accent to-primary-light",
    },
    {
      icon: Leaf,
      title: "Consultoria ambiental",
      description: "Serviços especializados em gestão e consultoria ambiental",
      gradient: "from-primary-light to-primary",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trazendo qualidade e eficiência em cada produto e serviço
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {services.map((service, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-medium bg-gradient-card">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Precisa de uma solução específica?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Entre em contato conosco e descubra como podemos ajudar com produtos de qualidade e consultoria especializada
            </p>
            <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="lg">
                <Sparkles className="w-5 h-5" />
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
