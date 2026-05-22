"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20",
    secondary: "bg-brand-soft-blue text-brand-blue hover:bg-blue-100",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-50 text-brand-navy",
    ghost: "bg-transparent hover:bg-slate-100 text-brand-navy",
    dark: "bg-brand-navy text-white hover:bg-brand-navy/90 shadow-xl shadow-brand-navy/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
