import  { PricingCard } from "@/app/components/PricingCard";
import React from "react";

const PricingSection = () => {
  interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    variant?: "default" | "highlight";
  }

  const pricingPlans: PricingCardProps[] = [
    {
      title: "Basic",
      price: "$29",
      features: ["1 Graphic Design Module", "1 Front-end Module"],
    },
    {
      title: "Pro",
      price: "$69",
      features: ["1 Graphic Design Module", "1 Front-end Module", "2 Marketing Module", "30 Minutes Mentor Class"],
      variant: "highlight",
    },
    {
      title: "Enterprise",
      price: "$99",
      features: ["All Modules", "1 Hour Mentor Class"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[900px] mx-auto px-4 text-center">
        {/* Section heading */}
        <h2
          className="mt-3 font-bold text-gray-900 leading-tight
                 text-2xl sm:text-3xl md:text-5xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Pricing & Plans
        </h2>
        <p className="mt-6 text-[14px] sm:text-[16px] md:text-[20px] text-gray-400 leading-relaxed">
          Choose the plan that fits your business needs
        </p>
        {/* Pricing cards */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              variant={plan.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
