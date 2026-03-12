import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
  
  const faqs = [
    {
      question: "Quanto custa contratar a agência?",
      answer:
        "Nossos planos são personalizados de acordo com as necessidades de cada cliente. Agende um diagnóstico gratuito para receber uma proposta sob medida para o seu negócio.",
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os primeiros resultados geralmente aparecem entre 30 a 90 dias, dependendo da estratégia e do mercado. Trabalhamos com metas claras e relatórios mensais para acompanhar a evolução.",
    },
    {
      question: "Quais empresas vocês atendem?",
      answer:
        "Atendemos empresas de diversos segmentos, desde startups até empresas consolidadas. Nosso foco é em negócios que querem crescer no digital e estão dispostos a investir em estratégia.",
    },
    {
      question: "Vocês trabalham com contratos mensais?",
      answer:
        "Sim, trabalhamos com contratos mensais com período mínimo de 3 meses para garantir que a estratégia tenha tempo de gerar resultados consistentes.",
    },
  ];
  
  export default function FAQSection() {
    return (
      <section id="faq" className="py-24 md:py-32 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
              Dúvidas frequentes
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
              FAQ
            </h2>
          </div>
  
          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-[#1A1A1A] rounded-xl px-6 bg-[#111111] data-[state=open]:border-[#00FF88]/30 transition-colors"
              >
                <AccordionTrigger className="text-white text-left font-semibold text-base hover:text-[#00FF88] transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#888888] text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  }