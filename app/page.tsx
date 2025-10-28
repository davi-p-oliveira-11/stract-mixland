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
      {/* Header with Navbar and Hero */}

      <header>
        {/* Navbar */}
        <div className="w-full bg-gray-900">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <Navbar />

            {/* Hero Section */}
            <div className="pt-[80px] md:pt-[100px] ">
              <HeroSection />
            </div>
          </div>
        </div>
      </header>

      {/* Main sections */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Features />
        <Features2 />
        <Features3 />
        <PricingSection />
        <TestimonialSection />
        <CTA />
      </main>

      {/* Footer */}

      <footer className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Footer />
      </footer>
    </>
  );
}
