import * as React from "react";
import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Estratégias personalizadas para cada negócio",
    "Equipe multidisciplinar e criativa",
    "Foco em resultados mensuráveis",
    "Atendimento próximo e transparente",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF88]/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-[#222222]">
              <img
                src="https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/761f1f94-0f28-4dff-994c-5db7d518ffa3.png"
                alt="RAW Marketing Team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-8">
            <div>
              <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
                Sobre nós
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
                Quem é a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00CC6A]">
                  RAW
                </span>
              </h2>
            </div>

            <p className="text-[#888888] text-lg leading-relaxed">
              Somos uma agência especializada em crescimento digital e
              posicionamento de marcas nas redes sociais. Combinamos
              criatividade, dados e estratégia para transformar a presença
              digital dos nossos clientes em resultados reais.
            </p>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00FF88] flex-shrink-0" />
                  <span className="text-[#CCCCCC] text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}