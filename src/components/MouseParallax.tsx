"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type MouseParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
};

export default function MouseParallax({ children, className = "", speed = 0.5 }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useSpring(useTransform(x, [-1, 1], [-20 * speed, 20 * speed]), {
    stiffness: 150,
    damping: 15,
  });
  const moveY = useSpring(useTransform(y, [-1, 1], [-20 * speed, 20 * speed]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    x.set(distanceX / (rect.width / 2));
    y.set(distanceY / (rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={className}>
      <motion.div
        style={{
          x: moveX,
          y: moveY,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

