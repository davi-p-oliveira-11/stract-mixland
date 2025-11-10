import Navbar from "@/app/(sections)/Navbar/Navbar";
import HeroSection from "@/app/(sections)/HeroSection/HeroSection";
import Features from "@/app/(sections)/Features/Features";
import Features2 from "@/app/(sections)/Features2/Features2";
import Features3 from "@/app/(sections)/Features3/Features3";
import PricingSection from "@/app/(sections)/PricingSection/PricingSection";
import TestimonialSection from "@/app/(sections)/TestiimonialSection/TestimonialSection";
import CTA from "@/app/(sections)/CTA/CTA";
import Footer from "@/app/(sections)/Footer/Footer";
import Container from "@/app/components/Container";
import Section from "@/app/components/Section";

export default function HomePage() {
  return (
    <>
      {/* Header */}
      <Section bg="bg-gray-900" textColor="text-white" paddingY="pt-[80px] md:pt-[100px] pb-20">
        <Container>
          <Navbar />
          <HeroSection />
        </Container>
      </Section>

      {/* Features 1 & 2 */}
      <Container>
        <Features />
        <Features2 />
      </Container>

      {/* Features 3 */}
      <Section bg="bg-gray-900" textColor="text-white">
        <Container>
          <Features3 />
        </Container>
      </Section>

      {/* Pricing & Testimonials */}
      <Container>
        <PricingSection />
        <TestimonialSection />
      </Container>

      {/* CTA */}
      <Section bg="bg-[#2B59FF]" textColor="text-white">
        <Container>
          <CTA />
        </Container>
      </Section>

      {/* Footer */}
      <Section bg="bg-gray-900" textColor="text-white">
        <Container>
          <Footer />
        </Container>
      </Section>
    </>
  );
}
