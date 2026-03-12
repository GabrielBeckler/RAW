import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import React from "react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Analisamos sua marca, mercado e concorrência para entender onde você está e onde quer chegar.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estratégia",
    description:
      "Criamos um plano personalizado com metas claras, canais e ações para alcançar seus objetivos.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execução",
    description:
      "Colocamos a estratégia em prática com conteúdo, campanhas e gestão profissional.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Escala",
    description:
      "Otimizamos continuamente para maximizar resultados e escalar o crescimento.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Nosso Processo
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#00FF88]/20 via-[#00FF88]/40 to-[#00FF88]/20" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                {/* Step circle */}
                <div className="relative z-10 w-[120px] h-[120px] mx-auto mb-8">
                  <div className="absolute inset-0 rounded-full border-2 border-[#1A1A1A] group-hover:border-[#00FF88]/40 transition-colors duration-500" />
                  <div className="absolute inset-2 rounded-full bg-[#111111] flex flex-col items-center justify-center">
                    <Icon className="w-8 h-8 text-[#00FF88] mb-1" />
                    <span className="text-[#00FF88] text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}