import Navbar from "@/app/(sections)/Navbar/Navbar";
import HeroSection from "@/app/(sections)/HeroSection/HeroSection";
import Features from "@/app/(sections)/Features/Features";
import Features2 from "@/app/(sections)/Features2/Features2";
import Features3 from "@/app/(sections)/Features3/Features3";
import PricingSection from "@/app/(sections)/PricingSection/PricingSection";
import TestimonialSection from "@/app/(sections)/TestiimonialSection/TestimonialSection";
import CTA from "@/app/(sections)/CTA/CTA";
import Footer from "@/app/(sections)/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Features2 />
      <Features3 />
      <PricingSection />
      <TestimonialSection />
      <CTA />
      <Footer />
    </>
  );
}
