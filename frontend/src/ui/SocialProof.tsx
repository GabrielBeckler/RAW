import React from "react";
export default function SocialProof() {
    const clients = [
      "TechFlow",
      "NovaBrand",
      "UrbanFit",
      "GreenLeaf",
      "SkyMedia",
      "PulseDigital",
      "VortexCo",
      "BlueWave",
    ];
  
    return (
      <section className="py-20 bg-[#0A0A0A] border-y border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#888888] text-sm uppercase tracking-widest mb-12">
            Empresas que confiaram na RAW
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center h-16 rounded-xl border border-[#1A1A1A] bg-[#111111] hover:border-[#00FF88]/30 transition-all duration-300 group"
              >
                <span className="text-[#555555] group-hover:text-[#888888] font-bold text-lg tracking-wider transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }