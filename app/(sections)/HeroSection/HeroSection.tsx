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
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
          {heroContent.title}
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          {heroContent.subtitle}
        </p>

        <div className="mt-10 flex justify-center items-center gap-6">
          <Button
            variant="primary"
            size="md"
            fullWidth={false}
            className="px-6 py-3 sm:px-8 sm:py-4"
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
