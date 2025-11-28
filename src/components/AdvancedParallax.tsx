"use client";

import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

type AdvancedParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
  opacity?: boolean;
  scale?: boolean;
};

export function AdvancedParallax({
  children,
  speed = 0.5,
  className = "",
  direction = "up",
  opacity = false,
  scale = false,
}: AdvancedParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]);
  const opacityValue = opacity ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]) : 1;
  const scaleValue = scale ? useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]) : 1;

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ y: smoothY, opacity: opacityValue, scale: scaleValue }} className={className}>
      {children}
    </motion.div>
  );
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  priority?: boolean;
};

export function ParallaxImage({ src, alt, speed = 0.5, className = "", priority = false }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ y: smoothY, scale: smoothScale, opacity }}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}

type RevealTextProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
};

export function RevealText({ children, delay = 0, className = "", direction = "up" }: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.3"],
  });

  const directions = {
    up: [50, 0],
    down: [-50, 0],
    left: [50, 0],
    right: [-50, 0],
  };

  const [start, end] = directions[direction];
  const y = direction === "up" || direction === "down" ? useTransform(scrollYProgress, [0, 1], [start, end]) : 0;
  const x = direction === "left" || direction === "right" ? useTransform(scrollYProgress, [0, 1], [start, end]) : 0;
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, x, opacity }}
      initial={{ opacity: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FloatingElementProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export function FloatingElement({ children, speed = 1, className = "" }: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [0, -20 * speed, 0],
      }}
      transition={{
        duration: 3 + speed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

