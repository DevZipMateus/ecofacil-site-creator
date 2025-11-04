import { Target, Lightbulb, Heart, Leaf, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import aboutProducts from "@/assets/about-products.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Compromisso com práticas que respeitam e preservam o meio ambiente",
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Oferecer sempre o melhor em produtos e serviços",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscar constantemente novas soluções eficientes e responsáveis",
    },
    {
      icon: Heart,
      title: "Cuidado",
      description: "Atenção com cada cliente, detalhe e impacto das nossas ações",
    },
    {
      icon: Target,
      title: "Respeito",
      description: "Base de todas as relações com pessoas, parceiros e o planeta",
    },
    {
      icon: TrendingUp,
      title: "Economia",
      description: "Vantagens reais e acessíveis sem abrir mão da qualidade",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Sobre a Ecofácil
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Unindo sustentabilidade, qualidade e praticidade desde 2025
          </p>
        </div>

        {/* Story */}
        <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <Card className="p-6 sm:p-8 md:p-12 shadow-medium bg-gradient-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <p className="text-foreground leading-relaxed mb-6">
                  Fundada em 2025, a <strong>Ecofácil Loja e Consultoria Ambiental</strong> nasceu com o propósito de unir sustentabilidade, qualidade e praticidade em um só lugar. A partir da ideia de um negócio voltado ao cuidado com o meio ambiente e à necessidade de oferecer produtos de limpeza de alta qualidade, a empresa se consolidou como uma parceira confiável para residências e empresas que buscam soluções eficientes e conscientes.
                </p>
                <p className="text-foreground leading-relaxed mb-6">
                  Ao longo de sua trajetória, a Ecofácil expandiu seu portfólio, oferecendo produtos de limpeza, embalagens, papéis em geral, sacos de lixo e uma ampla variedade de materiais voltados ao dia a dia. Além disso, atua na consultoria ambiental, promovendo práticas responsáveis e sustentáveis que contribuem para um futuro mais verde e equilibrado.
                </p>
                <p className="text-foreground leading-relaxed">
                  Com uma atuação moderna e comprometida, a Ecofácil busca ser referência regional pela qualidade dos produtos, atendimento de excelência e respeito ao meio ambiente — valores que estão presentes em cada ação, produto e projeto desenvolvido.
                </p>
              </div>
              <div className="order-first md:order-last">
                <img 
                  src={aboutProducts} 
                  alt="Produtos de limpeza sustentáveis da Ecofácil" 
                  className="rounded-xl shadow-soft w-full h-auto"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in bg-gradient-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Ser referência regional em soluções sustentáveis, unindo qualidade, inovação e consciência ambiental, contribuindo para um futuro mais limpo e equilibrado.
            </p>
          </Card>

          <Card className="p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in bg-gradient-card" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-foreground leading-relaxed">
              Oferecer produtos de limpeza e serviços de consultoria ambiental que promovam economia, eficiência e respeito ao meio ambiente, garantindo satisfação e confiança aos nossos clientes.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-foreground mb-8 sm:mb-12 px-4">
            Nossos valores
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, idx) => (
              <Card
                key={idx}
                className="p-5 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 sm:p-4 bg-primary/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                    <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
