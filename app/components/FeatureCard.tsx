import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="w-full max-w-[416px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex gap-4 sm:gap-5">
      {/* Icon */}
      <div className="shrink-0">
        <Image
          src={icon}
          alt={`${title} icon`}
          width={50}
          height={50}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col">
        <h4 className="font-bold text-[18px] sm:text-[20px] md:text-[21px] text-gray-900 leading-tight">
          {title}
        </h4>

        <p className="mt-2 text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
