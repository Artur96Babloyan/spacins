"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SpaceCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 20, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasMouse) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]')
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    >
      {/* Main cursor dot */}
      <motion.div
        className="relative"
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 25 },
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-sky-400/80"
          animate={{
            scale: isHovering ? [1, 1.4, 1] : [1, 1.2, 1],
            opacity: isHovering ? [0.8, 1, 0.8] : [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner dot */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
          animate={{
            scale: isHovering ? [1, 1.3, 1] : [1, 1.1, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glow effect */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/40 blur-sm"
          animate={{
            scale: isHovering ? [1, 1.8, 1] : [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Subtle pulse ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

