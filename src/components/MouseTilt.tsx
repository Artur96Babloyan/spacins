"use client";

import { motion, useMotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type MouseTiltProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export default function MouseTilt({ children, className = "", intensity = 15 }: MouseTiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Removed rotation transforms - no rotation on hover
  // const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
  //   stiffness: 300,
  //   damping: 30,
  // });
  // const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
  //   stiffness: 300,
  //   damping: 30,
  // });

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
        // Removed rotation transforms
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

