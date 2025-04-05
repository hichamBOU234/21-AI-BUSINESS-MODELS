import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  bgColor?: string;
  containerWidth?: "default" | "narrow" | "wide";
  paddingY?: "default" | "small" | "large" | "none";
}

export function Section({ 
  id,
  className,
  children,
  bgColor = "bg-black", 
  containerWidth = "default",
  paddingY = "default"
}: SectionProps) {
  const containerClasses = {
    default: "container mx-auto px-4 sm:px-6 lg:px-8",
    narrow: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl",
    wide: "container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
  };

  const paddingClasses = {
    default: "py-16 lg:py-24",
    small: "py-8 lg:py-12",
    large: "py-24 lg:py-32",
    none: ""
  };

  return (
    <section 
      id={id}
      className={cn(
        bgColor,
        paddingClasses[paddingY],
        className
      )}
    >
      <div className={containerClasses[containerWidth]}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({ 
  title, 
  subtitle, 
  center = false,
  className = ""
}: { 
  title: string; 
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn(
      "mb-12 lg:mb-16",
      center ? "text-center max-w-3xl mx-auto" : "",
      className
    )}>
      <h2 className="font-poppins font-bold text-3xl lg:text-4xl text-white mb-4">{title}</h2>
      {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
    </div>
  );
}
