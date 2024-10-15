'use client'
import { cn } from "@/lib/utils";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
const AnimationWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  useEffect(() => {
    AOS.init({
      duration:2000, // Durasi animasi dalam milidetik
    });
  }, []);
  return <div className={cn(className)}>{children}</div>;
};

export default AnimationWrapper;
