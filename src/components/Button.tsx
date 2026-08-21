import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  href,
  target,
  rel,
  className = "",
}) => {
  const baseClasses =
    "px-6 py-3 font-semibold rounded-lg transition-all duration-300 inline-block text-center";

  const variantClasses = {
    primary:
      "bg-[#3b82f6] text-white hover:shadow-accent-glow-lg hover:scale-105",
    secondary:
      "bg-transparent text-white border border-[#3b82f6] hover:bg-[#3b82f6] hover:bg-opacity-10",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
