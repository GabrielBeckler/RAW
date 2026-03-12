import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Zap, Award } from "lucide-react";
import React from "react";

const stats = [
  {
    icon: Users,
    value: 150,
    prefix: "+",
    suffix: "",
    label: "Clientes atendidos",
  },
  {
    icon: Zap,
    value: 500,
    prefix: "+",
    suffix: "",
    label: "Campanhas criadas",
  },
  {
    icon: TrendingUp,
    value: 10,
    prefix: "+",
    suffix: " milhões",
    label: "Em faturamento gerado",
  },
  {
    icon: Award,
    value: 5,
    prefix: "+",
    suffix: " anos",
    label: "De experiência",
  },
];

function AnimatedCounter({
  value,
  prefix,
  suffix,
  isVisible,
}: {
  value: number;
  prefix: string;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#0A0A0A] relative"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00FF88]/[0.02] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#00FF88] text-sm font-semibold uppercase tracking-widest">
            Nossos números
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            Resultados que falam
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-8 rounded-2xl border border-[#1A1A1A] bg-[#111111] hover:border-[#00FF88]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00FF88]/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <p className="text-[#888888] text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}