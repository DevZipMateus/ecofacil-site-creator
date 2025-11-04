import { useEffect, useState } from "react";
import Header from "@/components/Header";

declare global {
  interface Window {
    montesiteLoaded?: boolean;
  }
}

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(
    window.innerHeight - 80 - 63
  );

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerHeight - 80 - 63);
    };

    window.addEventListener("resize", handleResize);
    
    // Load Monte Site badge script
    if (!window.montesiteLoaded) {
      const script = document.createElement("script");
      script.src = "https://vaabpicspdbolvutnscp.supabase.co/functions/v1/get-footer-iframe";
      script.async = true;
      document.body.appendChild(script);
      window.montesiteLoaded = true;
    }
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <main className="flex-1 mt-20">
        <iframe
          src="https://tailorbergmeisgmailcom.egestor.com.br/vitrine/"
          style={{
            width: "100%",
            height: `${iframeHeight}px`,
            border: "none",
          }}
          title="Demonstração de Vitrine"
        />
      </main>
      {/* Monte Site Badge */}
      <div id="montesite-footer-badge"></div>
    </div>
  );
};

export default Vitrine;
