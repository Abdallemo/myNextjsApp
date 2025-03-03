"use client"
import { AnimatePresence, motion } from "motion/react"
import React, { ReactElement, useEffect, useState } from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

type IconProps = {
  className?: string;
  fill?: string;
  stroke?: string;
};
type props = {
  callback?: CallableFunction;
  icon: ReactElement<IconProps> | null;
  number: number;
  Color?: string;
  hover?: string;
  Status?: boolean;

}

export default function SocialButton({
  callback,
  icon,
  number,
  Color = "pink",
  Status = false,
}: props) {
  const [engagementStatus, setEngagementStatus] = useState<boolean>(Status);
  const [engagementNumber, setEngagementNumber] = useState<number | null>(number!);

  useEffect(() => {
    setEngagementStatus(Status);
  }, [Status]);

  useEffect(() => {
    setEngagementNumber(number);
  }, [number]);

  return (
    <div
      className="group flex flex-row gap-1 w-fit"
      style={{ "--color-var": Color } as React.CSSProperties} 
    >
      <div className={cn("items-center flex p-1 rounded-full justify-center transition-colors ease-linear")} >
        <button
          className={cn(
            "group transition-colors",
            engagementStatus ? "text-[var(--color-var)]" : "text-gray-500",
            "group-hover:text-[var(--color-var)]"
          )}
          onClick={() => {
            setEngagementStatus((prev) => !prev);
            setEngagementNumber((prevCount) =>
              engagementStatus ? prevCount! - 1 : prevCount! + 1
            );
            callback?.();
          }}
        >
          {icon &&
            React.isValidElement(icon) &&
            React.cloneElement(icon, {
              className: "size-6 transition-colors",
              fill: engagementStatus ? "currentColor" : "transparent",
              stroke: "currentColor",
            })}
        </button>
      </div>
      <div className="flex text-gray-500 group-hover:text-[var(--color-var)] p-1 justify-center items-start">
        <AnimatedCounter value={engagementNumber!} />
      </div>
    </div>
  );
}


function AnimatedCounter({ value, className }: { value: number, className?: string }) {
  return (
    <div className="relative h-5 w-10 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
          }}
          className={className}
        >
          {FormatCompactNumber(value)}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

//helpers
const compactNumberFormating = new Intl.NumberFormat(undefined, { notation: 'compact' })

export function FormatCompactNumber(number: number) {
  return compactNumberFormating.format(number);

}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}