import React from "react";
interface CTAProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
}

const CTA: React.FC<CTAProps> = ({}) => {
  return (
    <section className="bg-[#2B59FF] text-white py-20 sm:py-28">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold leading-tight text-white"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Start learning new things & build your skills today
        </h2>

        <p className="mt-4 text-base sm:text-lg md:text-[18px] text-white/90 leading-relaxed">
          Build your next landing page fast & easy
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-[187px] h-[50px] px-[20px] py-[16px] text-base font-semibold bg-white text-gray-900 rounded-md hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="w-full sm:w-[187px] h-[50px] px-[20px] py-[16px] text-base font-semibold bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
