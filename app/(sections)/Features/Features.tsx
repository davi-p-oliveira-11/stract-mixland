import React from "react";
import Image from "next/image";
import FeatureCard from "@/app/components/FeatureCard";

const Features = () => {
  return (
    <section className="bg-white py-20 sm:py-28">
      <p className="text-indigo-600 uppercase tracking-wide text-sm font-semibold text-center">
        FEATURES
      </p>

      <h3 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug text-center">
        Everything you need to build modern experiences
      </h3>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout: left text + right image */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-12 items-start">
          {/* LEFT SIDE — 30% */}
          <div className="mt-10 flex flex-col gap-6">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />      
          </div>

          {/* RIGHT SIDE — 70% */}
          <div className="w-full flex justify-center items-start max-h-[450px]">
            <Image
              src="/images/feature1.svg"
              alt="Feature visual"
              className="w-full h-auto object-contain"
              width={763}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
