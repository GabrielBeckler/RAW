import * as React from "react";
import HeroSection from "../ui/HeroSection";
import SocialProof from "../ui/SocialProof";
import AboutSection from "../ui/AboutSection";
import ServicesSection from "../ui/ServicesSection";
import ResultsSection from "../ui/ResultsSection";
import PortfolioSection from "../ui/PortfolioSection";
import ProcessSection from "../ui/ProcessSection";
import TestimonialsSection from "../ui/TestimonialsSection";
import CTASection from "../ui/CTASection";
import FAQSection from "../ui/FAQSection";
import Footer from "../ui/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <HeroSection />
      <SocialProof />
      <AboutSection />
      <ServicesSection />
      <ResultsSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}