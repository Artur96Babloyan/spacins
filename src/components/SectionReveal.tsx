"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  motionProps?: MotionProps;
};

export default function SectionReveal({
  children,
  className,
  delay = 0,
  motionProps,
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

