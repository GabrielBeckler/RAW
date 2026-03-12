import { ExternalLink } from "lucide-react";
import React from "react";

const projects = [
  {
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/66eca956-c9df-4c7c-8b28-0d463b6ebbb7.png",
    client: "Fashion Brand",
    service: "Gestão de Redes Sociais",
  },
  {
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/63403217-92d1-4190-bf02-163583b100fe.png",
    client: "TechStartup",
    service: "Tráfego Pago & Analytics",
  },
  {
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/c2271456-85f8-4e4b-bb17-f40aac7f0c0d.png",
    client: "Restaurante Gourmet",
    service: "Criação de Conteúdo",
  },
  {
    image:
      "https://mgx-backend-cdn.metadl.com/generate/images/1021296/2026-03-12/7f2bc0ff-afc5-4dc3-9a4b-cdebf7fc52fc.png",
    client: "E-commerce Store",
    service: "Desenvolvimento de Site",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
            Nosso trabalho
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Portfólio
          </h2>
          <p className="text-[#888888] text-lg mt-4 max-w-2xl mx-auto">
            Conheça alguns dos projetos que transformaram marcas
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.client}
              className="group relative overflow-hidden rounded-2xl border border-[#1A1A1A] bg-[#111111] cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.client}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#00FF88] text-sm font-semibold uppercase tracking-wider mb-2">
                    {project.service}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {project.client}
                  </h3>
                  <button className="inline-flex items-center gap-2 text-white text-sm font-medium border border-white/30 rounded-lg px-4 py-2 hover:bg-white hover:text-black transition-all">
                    Ver case
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}