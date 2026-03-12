import { Button } from "./button";
import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88] rounded-full opacity-[0.03] blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF88]/20 bg-[#00FF88]/5 mb-8">
          <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
          <span className="text-[#00FF88] text-sm font-medium">
            Vagas limitadas este mês
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Pronto para escalar{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">
            sua marca?
          </span>
        </h2>

        <p className="text-[#888888] text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Agende uma reunião gratuita e descubra como podemos transformar sua
          presença digital em resultados reais.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#00FF88] text-black font-semibold hover:bg-[#00CC6A] rounded-lg px-10 h-14 text-base group">
            Agendar reunião
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="border-[#333333] text-white hover:bg-white hover:text-black rounded-lg px-10 h-14 text-base bg-transparent"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}