import { Star, Quote } from "lucide-react";
import React from "react";

const testimonials = [
  {
    name: "Ana Silva",
    company: "UrbanFit",
    result: "+300% de engajamento em 3 meses",
    text: "A RAW transformou completamente nossa presença digital. Os resultados superaram todas as expectativas.",
    avatar: "AS",
  },
  {
    name: "Carlos Mendes",
    company: "TechFlow",
    result: "R$500k em vendas via Instagram",
    text: "Profissionais incríveis. Entenderam nosso negócio e entregaram resultados reais desde o primeiro mês.",
    avatar: "CM",
  },
  {
    name: "Juliana Costa",
    company: "GreenLeaf",
    result: "De 2k para 50k seguidores",
    text: "O trabalho da RAW é diferenciado. Estratégia clara, execução impecável e resultados consistentes.",
    avatar: "JC",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl border border-[#1A1A1A] bg-[#111111] hover:border-[#00FF88]/30 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-[#00FF88]/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#00FF88] text-[#00FF88]"
                  />
                ))}
              </div>

              <p className="text-[#CCCCCC] text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Result badge */}
              <div className="inline-block px-3 py-1.5 rounded-full bg-[#00FF88]/10 text-[#00FF88] text-xs font-semibold mb-6">
                {testimonial.result}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-[#1A1A1A]">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00CC6A] flex items-center justify-center">
                  <span className="text-black font-bold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#888888] text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}