import React from "react";
import Image from "next/image";
import Counter from "@/app/components/Counter";

const Features3 = () => {
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
    <section className="py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right div- Text */}
          <div className="flex flex-col">
            <h4 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
              {sectionContent.title}
            </h4>

            <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
              {sectionContent.description}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-8 justify-center">
              <Counter target={2000} label="Projects Done" />
              <Counter target={3000} label="Happy Clients" />
            </div>
          </div>

          {/* Left div- Image */}
          <div className="w-full flex justify-center md:justify-start">
            <Image
              src="/images/feature3.svg"
              alt="Showcase section visual"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features3;
