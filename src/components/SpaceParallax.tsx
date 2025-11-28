"use client";

import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { ReactNode, useRef } from "react";

type SpaceParallaxProps = {
  children?: ReactNode;
  className?: string;
  speed?: number;
  starCount?: number;
};

function FloatingStar({
  index,
  total,
  x,
  y,
  speed,
}: {
  index: number;
  total: number;
  x: MotionValue<number>;
  y: MotionValue<number>;
  speed: number;
}) {
  const angle = (index * 2 * Math.PI) / total;
  const radius = 60 + (index % 3) * 20;
  const baseX = radius * Math.cos(angle);
  const baseY = radius * Math.sin(angle);

  const starX = useSpring(
    useTransform(x, [-1, 1], [baseX - 10 * speed, baseX + 10 * speed]),
    { stiffness: 100, damping: 20 }
  );
  const starY = useSpring(
    useTransform(y, [-1, 1], [baseY - 10 * speed, baseY + 10 * speed]),
    { stiffness: 100, damping: 20 }
  );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_6px_rgba(103,232,249,0.8)]"
      style={{
        x: useTransform(starX, (val) => `calc(-50% + ${val}px)`),
        y: useTransform(starY, (val) => `calc(-50% + ${val}px)`),
      }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [0.8, 1.2, 0.8],
      }}
      transition={{
        duration: 2 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
    />
  );
}

export default function SpaceParallax({
  children,
  className = "",
  speed = 0.5,
  starCount = 8,
}: SpaceParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const moveX = useSpring(useTransform(x, [-1, 1], [-30 * speed, 30 * speed]), {
    stiffness: 100,
    damping: 20,
  });
  const moveY = useSpring(useTransform(y, [-1, 1], [-30 * speed, 30 * speed]), {
    stiffness: 100,
    damping: 20,
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
      {/* Floating stars */}
      {[...Array(starCount)].map((_, i) => (
        <FloatingStar key={i} index={i} total={starCount} x={x} y={y} speed={speed} />
      ))}

      {children && (
        <motion.div
          style={{
            x: moveX,
            y: moveY,
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}

