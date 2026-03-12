import {
    Share2,
    Target,
    Palette,
    PenTool,
    Globe,
  } from "lucide-react";
import React from "react";
  
  const services = [
    {
      icon: Share2,
      title: "Gestão de Redes Sociais",
      items: [
        "Planejamento estratégico",
        "Calendário de conteúdo",
        "Crescimento de perfil",
      ],
    },
    {
      icon: Target,
      title: "Tráfego Pago",
      items: ["Meta Ads", "Google Ads", "Campanhas de conversão"],
    },
    {
      icon: Palette,
      title: "Branding",
      items: ["Identidade visual", "Posicionamento de marca"],
    },
    {
      icon: PenTool,
      title: "Criação de Conteúdo",
      items: ["Design para redes sociais", "Reels e vídeos", "Copywriting"],
    },
    {
      icon: Globe,
      title: "Desenvolvimento de Sites",
      items: ["Landing pages", "Sites institucionais"],
    },
  ];
  
  export default function ServicesSection() {
    return (
      <section id="services" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
              O que fazemos
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
              Nossos Serviços
            </h2>
            <p className="text-[#888888] text-lg mt-4 max-w-2xl mx-auto">
              Soluções completas para sua marca crescer no digital
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group relative p-8 rounded-2xl border border-[#1A1A1A] bg-[#111111] hover:border-[#00FF88]/40 transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00FF88]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mb-6 group-hover:bg-[#00FF88]/20 transition-colors">
                      <Icon className="w-7 h-7 text-[#00FF88]" />
                    </div>
  
                    <h3 className="text-xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
  
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="text-[#888888] text-sm flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88]/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }