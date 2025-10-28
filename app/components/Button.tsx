import { FC, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) => {
  const base = "font-semibold transition-all duration-200 transform hover:scale-[1.03] cursor-pointer";

  const variants = {
    primary: "bg-[#2B59FF] text-white hover:bg-[#2B59FF]",
    secondary: "bg-gray-900 text-black hover:bg-gray-900",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: `
    w-[160px] h-[45px] px-[16px] py-[12px] text-sm rounded-sm
    sm:w-[175px] sm:h-[48px] sm:px-[18px] sm:py-[14px] sm:text-base rounded-sm
    md:w-[187px] md:h-[50px] md:px-[20px] md:py-[16px] md:text-base rounded-sm
    lg:w-[200px] lg:h-[55px] lg:text-lg
  `,
    lg: "px-8 py-4 text-lg rounded-full",
  };

  return (
    <button
      className={clsx(
        base,
        variants[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    />
  );
};

export default Button;
