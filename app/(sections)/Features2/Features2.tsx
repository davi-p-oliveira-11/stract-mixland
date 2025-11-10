import React from "react";
import Image from "next/image";

const Features2 = () => {
  interface sectionContent {
    image: string;
    title: string;
    description: string;
    reverse?: boolean; // Optional — allows alternate layout
  }

  const sectionContent: sectionContent = {
    image: "/images/showcase1.svg",
    title: "Powerful tools to accelerate your workflow",
    description:
      " Build modern, responsive landing pages with clean, maintainable components and rock-solid structure. Perfect for startups, SaaS, and agencies looking to convert more users.",
    reverse: false,
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left div- Image */}
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/images/feature2.svg"
              alt="Showcase section visual"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right div- Text */}
          <div className="flex flex-col">
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              {sectionContent.title}
            </h4>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              {sectionContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
