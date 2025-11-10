import Image from "next/image";

const Showcase = () => {
  interface ShowcaseItem {
    image: string;
    title: string;
    description: string;
    reverse?: boolean; // Optional — allows alternate layout
  }

  const showcaseContent: ShowcaseItem[] = [
    {
      image: "/images/showcase1.svg",
      title: "Powerful tools for modern teams",
      description:
        "Collaborate, track progress, and launch faster with a flexible set of components.",
      reverse: false,
    },
    {
      image: "/images/showcase2.svg",
      title: "Beautiful UI built with Tailwind",
      description:
        "Save time and ship stunning landing pages with pre-built responsive sections.",
      reverse: true,
    },
    {
      image: "/images/showcase3.svg",
      title: "Optimized performance",
      description:
        "Enjoy lightning-fast load times thanks to Next.js and smart image optimization.",
      reverse: false,
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {showcaseContent.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="flex justify-center">
              <Image
                src={item.image}
                width={600}
                height={450}
                alt={item.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="text-center md:text-left">
              <h4 className="text-3xl font-bold text-gray-900 leading-tight">
                {item.title}
              </h4>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
