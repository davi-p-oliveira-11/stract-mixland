import { FC, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  bg?: string; // e.g., 'bg-white', 'bg-gray-900', 'bg-[#2B59FF]'
  textColor?: string; // e.g., 'text-white', 'text-gray-900'
  paddingY?: string; // e.g., 'py-20 sm:py-28'
}

const Section: FC<SectionProps> = ({
  children,
  bg = "bg-white",
  textColor = "text-gray-900",
  paddingY = "py-20 sm:py-28",
}) => {
  return <section className={`${bg} ${textColor} ${paddingY}`}>{children}</section>;
};

export default Section;
