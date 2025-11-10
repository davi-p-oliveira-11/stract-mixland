
import { PricingCard } from "@/app/components/PricingCard";
import React from "react";

const PricingSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600">
          Choose the plan that fits your business needs
        </p>

        {/* Pricing cards */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <PricingCard
            title="Basic"
            price="$19/mo"
            features={["Feature 1", "Feature 2"]}
          />
          <PricingCard
            title="Pro"
            price="$49/mo"
            features={["Feature 1", "Feature 2"]}
            variant="highlight"
          />
          <PricingCard
            title="Enterprise"
            price="$99/mo"
            features={["Feature 1", "Feature 2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
