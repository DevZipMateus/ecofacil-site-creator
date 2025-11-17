import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(54) 9.9686-0357",
      link: "https://wa.me/5554996860357",
    },
    {
      icon: Mail,
      title: "Email",
      content: "ecofacilcomercioeconsultoria@gmail.com",
      link: "mailto:ecofacilcomercioeconsultoria@gmail.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Belo Horizonte, nº 850, Bairro Nossa Senhora Aparecida, Tio Hugo/RS",
      link: null,
    },
  ];

  const hours = [
    { days: "Segunda a sexta", time: "08:30 às 18:30" },
    { days: "Sábado", time: "08:30 às 12:30" },
    { days: "Domingo", time: "Fechado" },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@ecofacil_comercio_consultoria",
      link: "https://instagram.com/ecofacil_comercio_consultoria",
      color: "hover:text-pink-600",
    },
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Ecofácil Loja e Consultoria Ambiental",
      link: "https://facebook.com/EcofacilLojaConsultoriaAmbiental",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            Entre em contato
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mb-4 sm:mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Estamos prontos para atender você com a melhor solução
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((info, idx) => (
              <Card
                key={idx}
                className="p-5 sm:p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in bg-gradient-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors inline-block text-xs sm:text-sm break-words"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-xs sm:text-sm break-words">{info.content}</p>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Hours and Social */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Hours */}
            <Card className="p-6 sm:p-8 shadow-soft animate-fade-in bg-gradient-card" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">Horário de funcionamento</h3>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {hours.map((hour, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border last:border-0 gap-1 sm:gap-0">
                    <span className="text-foreground font-medium text-sm sm:text-base">{hour.days}</span>
                    <span className="text-muted-foreground text-sm sm:text-base">{hour.time}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-6 sm:p-8 shadow-soft animate-fade-in bg-gradient-card" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-4 sm:mb-6">Redes sociais</h3>
              <div className="space-y-3 sm:space-y-4">
                {socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 group ${social.color}`}
                  >
                    <div className="p-2 sm:p-3 bg-background rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-foreground text-sm sm:text-base">{social.name}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground truncate">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* CTA */}
          <Card className="p-6 sm:p-8 md:p-12 text-center shadow-medium animate-fade-in bg-gradient-to-br from-primary to-primary-light" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
              Pronto para encontrar a solução ideal?
            </h3>
            <p className="text-white/90 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Nossa equipe está à disposição para atendê-lo com produtos de qualidade e consultoria especializada
            </p>
            <a href="https://wa.me/5554996603057" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
