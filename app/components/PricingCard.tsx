interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  variant?: "default" | "highlight";
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  variant = "default",
}) => {
  const isHighlight = variant === "highlight";

  // Background and text color based on variant
  const bgClass = isHighlight ? "bg-gray-900" : "bg-white";
  const textColor = isHighlight ? "text-white" : "text-gray-900";
  const subTextColor = isHighlight ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`w-full max-w-[320px] p-6 rounded-xl shadow transition-transform hover:scale-[1.02] ${bgClass}`}
    >
      {/* Plan name */}
      <p
        className={`text-[13px] font-bold uppercase tracking-wide ${
          isHighlight ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {title}
      </p>

      {/* Price */}
      <h3
        className={`mt-2 text-[48px] sm:text-[58px] font-semibold ${textColor}`}
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {price}
      </h3>

      {/* Feature list */}
      <ul className="mt-4 space-y-2">
        {features.map((f, i) => (
          <li key={i} className={`text-[14px] sm:text-[16px] ${subTextColor}`}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};
