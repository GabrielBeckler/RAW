import { Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import React from "react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#00FF88] rounded-lg flex items-center justify-center">
                <span className="text-black font-extrabold text-sm">R</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                RAW<span className="text-[#00FF88]">.</span>
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed">
              Agência especializada em crescimento digital e posicionamento de
              marcas nas redes sociais.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Sobre", id: "about" },
                { label: "Serviços", id: "services" },
                { label: "Resultados", id: "results" },
                { label: "Portfólio", id: "portfolio" },
                { label: "FAQ", id: "faq" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-[#888888] hover:text-[#00FF88] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Serviços
            </h4>
            <ul className="space-y-3">
              {[
                "Gestão de Redes Sociais",
                "Tráfego Pago",
                "Branding",
                "Criação de Conteúdo",
                "Desenvolvimento de Sites",
              ].map((service) => (
                <li key={service}>
                  <span className="text-[#888888] text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@rawmarketing.com.br"
                  className="text-[#888888] hover:text-[#00FF88] transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  contato@rawmarketing.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#888888] hover:text-[#00FF88] transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  (11) 99999-9999
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg border border-[#1A1A1A] bg-[#111111] flex items-center justify-center text-[#888888] hover:text-[#00FF88] hover:border-[#00FF88]/30 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#555555] text-sm">
            © 2026 RAW Marketing. Todos os direitos reservados.
          </p>
          <p className="text-[#555555] text-sm">
            Feito com{" "}
            <span className="text-[#00FF88]">♥</span> pela RAW
          </p>
        </div>
      </div>
    </footer>
  );
}