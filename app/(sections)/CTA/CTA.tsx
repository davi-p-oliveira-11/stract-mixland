import React from "react";
import Button from "@/app/components/Button";

interface CTAProps {
  title: string;
  subtitle: string;
  primaryLabel: string;
  secondaryLabel: string;
  primaryHref?: string;
  secondaryHref?: string;
}

const CTA: React.FC<CTAProps> = ({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  primaryHref = "#",
  secondaryHref = "#",
}) => {
  return (
    <section className="bg-[#2B59FF] text-white py-20 sm:py-28">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Start learning new things & build your skills today
        </h2>

        <p className="mt-4 text-lg sm:text-xl text-white/90 leading-relaxed">
         Build your next landing page fast & easy
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Button variant="secondary" size="md" fullWidth={true}>
            {primaryLabel}
          </Button>

          <Button variant="secondary" size="md" fullWidth={true}>
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
