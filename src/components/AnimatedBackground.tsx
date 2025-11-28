"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs with similar animations to blog images */}
      <motion.div
        className="absolute top-0 left-1/4 h-[38rem] w-[38rem] rounded-full bg-sky-500/30 blur-3xl"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.05, 1.12, 1.05],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.05, 1.15, 1.05],
          x: [0, -25, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.05, 1.2, 1.05],
          x: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 h-80 w-80 rounded-full bg-indigo-500/25 blur-3xl"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.05, 1.1, 1.05],
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
        initial={{ scale: 1.05 }}
        animate={{
          scale: [1.05, 1.18, 1.05],
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: [0.16, 1, 0.3, 1],
          delay: 1.5,
        }}
      />
      {/* Base gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top, rgba(56, 189, 248, 0.05), transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.05), transparent 45%),
            radial-gradient(circle at 80% 20%, rgba(165, 180, 252, 0.06), transparent 45%)
          `,
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

