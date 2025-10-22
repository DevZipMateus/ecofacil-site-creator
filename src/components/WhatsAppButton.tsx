import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5554996603057"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3 bg-[#25D366] text-white rounded-full shadow-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
