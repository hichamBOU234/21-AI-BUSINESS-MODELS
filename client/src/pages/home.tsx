import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import AboutBook from "@/components/home/about-book";
import Testimonials from "@/components/home/testimonials";
import EmailSignup from "@/components/home/email-signup";
import BuyNowSection from "@/components/home/buy-now-section";
import ContactSection from "@/components/home/contact-section";
import FaqSection from "@/components/home/faq-section";
import { useEffect } from "react";

export default function Home() {
  // Set page title and meta description
  useEffect(() => {
    document.title = "21 AI Business Models | Make Passive Income Online in 2025";
  }, []);

  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturesSection />
      <AboutBook />
      <Testimonials />
      <EmailSignup />
      <BuyNowSection />
      <ContactSection />
      <FaqSection />
    </div>
  );
}
