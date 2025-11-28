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
      {/* Main planet/cursor */}
      <motion.div
        className="relative h-10 w-10"
        animate={{
          scale: isHovering ? 1.8 : 1,
          rotate: [0, 360],
        }}
        transition={{
          scale: { type: "spring", stiffness: 400, damping: 25 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-sky-400/60"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Planet core */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-400 shadow-[0_0_20px_rgba(56,189,248,0.8),0_0_40px_rgba(139,92,246,0.6)]" />
        {/* Planet glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-sky-400/30 blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Orbiting stars */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,1)]"
          style={{
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            x: [
              `calc(-50% + ${30 * Math.cos((i * 2 * Math.PI) / 3)}px)`,
              `calc(-50% + ${35 * Math.cos((i * 2 * Math.PI) / 3 + Math.PI)}px)`,
              `calc(-50% + ${30 * Math.cos((i * 2 * Math.PI) / 3)}px)`,
            ],
            y: [
              `calc(-50% + ${30 * Math.sin((i * 2 * Math.PI) / 3)}px)`,
              `calc(-50% + ${35 * Math.sin((i * 2 * Math.PI) / 3 + Math.PI)}px)`,
              `calc(-50% + ${30 * Math.sin((i * 2 * Math.PI) / 3)}px)`,
            ],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Trailing particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-sky-300"
          style={{
            x: "-50%",
            y: "-50%",
          }}
          animate={{
            x: [
              `calc(-50% + ${-15 + i * 5}px)`,
              `calc(-50% + ${-20 + i * 5}px)`,
              `calc(-50% + ${-15 + i * 5}px)`,
            ],
            y: [
              `calc(-50% + ${-15 + i * 5}px)`,
              `calc(-50% + ${-20 + i * 5}px)`,
              `calc(-50% + ${-15 + i * 5}px)`,
            ],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 0.1,
          }}
        />
      ))}
    </motion.div>
  );
}

