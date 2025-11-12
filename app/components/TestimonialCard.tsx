import Image from "next/image";
import React from "react";

const TestimonialSection = () => {
  interface testimonialInfo  {
   testimonial: string;
   name: string;
  }

  const testimonialContent: testimonialInfo = {
    testimonial: `This landing page template completely transformed our online
              presence. The design is clean, modern, and the conversions went
              up by more than 30% in the first week.`,
    name: "John Walker"          
  }
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-[830px] mx-auto bg-white border border-gray-200 rounded-xl shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Image */}
          <div className="shrink-0">
            <Image
              src="/images/person1.svg"
              alt="Client photo"
              width={100}
              height={100}
              className="rounded-full object-cover"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col text-center sm:text-left">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {testimonialContent.testimonial}
            </p>

            <p className="mt-4 font-semibold text-gray-900 text-sm sm:text-base">
              {testimonialContent.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
