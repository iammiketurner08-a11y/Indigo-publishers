import React from "react";
import { cn } from "../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-indigo-900 text-white hover:bg-indigo-800 shadow-lg shadow-indigo-900/10",
      secondary: "bg-indigo-100 text-indigo-900 hover:bg-indigo-200",
      outline: "border-2 border-indigo-900 text-indigo-900 hover:bg-indigo-50",
      ghost: "text-indigo-900 hover:bg-indigo-50",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm font-semibold",
      lg: "px-8 py-4 text-base font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
