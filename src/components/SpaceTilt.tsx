"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

type SpaceTiltProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export default function SpaceTilt({ children, className = "", intensity = 15 }: SpaceTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 25,
  });

  // Add glow effect based on mouse position
  const glowX = useTransform(x, [-0.5, 0.5], [-20, 20]);
  const glowY = useTransform(y, [-0.5, 0.5], [-20, 20]);
  const glowOpacity = useTransform(
    [x, y],
    ([xVal, yVal]) => {
      const distance = Math.sqrt(xVal * xVal + yVal * yVal);
      return Math.min(distance * 0.5, 0.3);
    }
  );

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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Space glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-0 blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.4) 0%, transparent 70%)",
          x: glowX,
          y: glowY,
          opacity: glowOpacity,
        }}
      />
      {children}
    </motion.div>
  );
}

