import { useEffect, useRef } from "react";
import { Button } from "./button";
import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const rect = gridRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gridRef.current.style.setProperty("--mouse-x", `${x}px`);
      gridRef.current.style.setProperty("--mouse-y", `${y}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated Grid Background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          mask: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 200px, transparent 600px)",
          WebkitMask:
            "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black 200px, transparent 600px)",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00FF88] rounded-full opacity-[0.03] blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00FF88] rounded-full opacity-[0.05] blur-[100px] animate-pulse delay-1000" />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#00FF88] rounded-lg flex items-center justify-center">
              <span className="text-black font-extrabold text-sm">R</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              RAW<span className="text-[#00FF88]">.</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Sobre", id: "about" },
              { label: "Serviços", id: "services" },
              { label: "Resultados", id: "results" },
              { label: "Portfólio", id: "portfolio" },
              { label: "FAQ", id: "faq" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#888888] hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button
            onClick={() => scrollToSection("cta")}
            className="bg-[#00FF88] text-black font-semibold hover:bg-[#00CC6A] rounded-lg px-6 h-10 text-sm"
          >
            Agendar Diagnóstico
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24">
        {/* Left - Text */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#222222] bg-[#111111]">
            <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse" />
            <span className="text-[#888888] text-sm">
              Agência de Marketing Digital
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
            Transformamos seu Instagram em uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">
              máquina de vendas
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#888888] max-w-lg leading-relaxed">
            Estratégia, conteúdo e tráfego para escalar sua marca no digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-[#00FF88] text-black font-semibold hover:bg-[#00CC6A] rounded-lg px-8 h-14 text-base group"
            >
              Agendar Diagnóstico
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="outline"
              className="border-[#333333] text-white hover:bg-white hover:text-black rounded-lg px-8 h-14 text-base bg-transparent"
            >
              <Play className="mr-2 w-4 h-4" />
              Ver Portfólio
            </Button>
          </div>

          {/* Mini Stats */}
          <div className="flex gap-8 pt-4">
            {[
              { value: "+150", label: "Clientes" },
              { value: "+500", label: "Campanhas" },
              { value: "+10M", label: "Faturamento" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#00FF88]">
                  {stat.value}
                </div>
                <div className="text-sm text-[#888888]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Phone Mockup */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-[#00FF88] opacity-10 blur-[80px] rounded-full scale-75" />
            <img
              src="https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/2a249bc9-b540-4d13-abe7-8aadb1fd3ab3.png"
              alt="Instagram mockup"
              className="relative z-10 w-[400px] md:w-[480px] rounded-3xl drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#888888] text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-5 h-8 border-2 border-[#333333] rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-[#00FF88] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}