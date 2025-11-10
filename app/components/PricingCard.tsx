import { FC } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  variant?: "default" | "highlight";
}

export const PricingCard: FC<PricingCardProps> = ({
  title,
  price,
  features,
  variant = "default",
}) => {
  const bgClass = variant === "highlight" ? "bg-gray-900 text-white" : "bg-white text-gray-900";

  return (
    <div className={`w-full max-w-[320px] p-6 rounded-xl shadow ${bgClass}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-2xl font-semibold">{price}</p>
      <ul className="mt-4 space-y-2">
        {features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
};
