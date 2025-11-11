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
    title: "Effectively track real-time and updates from team management",
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
            <h4
              className="mt-3 font-bold text-white leading-tight
                 text-2xl sm:text-3xl md:text-5xl"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {sectionContent.title}
            </h4>

            <p className="mt-6 text-[14px] sm:text-[16px] md:text-[20px] text-white leading-relaxed">
              {sectionContent.description}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-10 sm:gap-36">
              <div className="max-w-[120px] sm:max-w-[150px] mx-auto sm:mx-0">
                <Counter target={36} label="Projects Done" />
              </div>

              <div className="max-w-[120px] sm:max-w-[150px] mx-auto sm:mx-0">
                <Counter target={92} label="Happy Clients" />
              </div>
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
