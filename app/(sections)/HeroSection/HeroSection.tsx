"use client";

import Button from "@/app/components/Button";

const HeroSection = () => {
  type HeroContent = {
    title: string;
    subtitle: string;
    ctaLabel: string;
    videoLabel: string;
  };

  const heroContent: HeroContent = {
    title: "Easy way to achieve customer satisfaction",
    subtitle:
      "Providing all customer service within one software. Our landing page template works on all devices and we have completely redesigned the project management experience.",
    ctaLabel: "Let's Get Started",
    videoLabel: "Watch our video",
  };

  return (
    <section className="bg-gray-900 text-white py-16 sm:py-24">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h1 
          className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px] font-bold leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
          {heroContent.title}
        </h1>

        <p className="mt-6 text-[14px] sm:text-[16px] md:text-[20px] text-gray-400 leading-relaxed">
          {heroContent.subtitle}
        </p>

        <div className="mt-10 flex justify-center items-center gap-6">
          <Button
            variant="primary"
            fullWidth={false}
            className="text-sm sm:text-base px-5 py-3 sm:px-6 sm:py-3 whitespace-nowrap"
          >
            {heroContent.ctaLabel}
          </Button>

          <a
            href="#"
            className="text-sm sm:text-base text-gray-300 underline hover:text-white transition"
          >
            {heroContent.videoLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
