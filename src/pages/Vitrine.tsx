import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState(
    window.innerHeight - 80 - 63
  );

  useEffect(() => {
    const handleResize = () => {
      setIframeHeight(window.innerHeight - 80 - 63);
    };

    window.addEventListener("resize", handleResize);
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
    </div>
  );
};

export default Vitrine;
