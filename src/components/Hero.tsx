"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SpaceParallax from "./SpaceParallax";

const heroHighlights = [
  "Applied AI product strategy",
  "Spatial brand storytelling",
  "Realtime copilots for ops teams",
];

const heroStats = [
  { value: "36", label: "Launches in the last year" },
  { value: "4.8x", label: "Avg. prototype velocity" },
  { value: "12", label: "Markets supported" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 pb-20 sm:pt-32 lg:pb-28" aria-labelledby="hero-heading">
      <SpaceParallax speed={0.3} starCount={12} className="pointer-events-none absolute inset-x-0 top-[-30rem] -z-10 flex justify-center blur-3xl">
        <div className="h-[38rem] w-[38rem] rounded-full bg-sky-500/30 opacity-60" />
      </SpaceParallax>
      <SpaceParallax speed={0.5} starCount={6} className="pointer-events-none absolute -left-40 top-32 -z-10 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
      <SpaceParallax speed={0.4} starCount={8} className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center backdrop-blur-sm bg-slate-950/20 rounded-3xl p-8 border border-white/5"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
            Spacins AI Studio
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
          </div>
          <h1 id="hero-heading" className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build soulful, intelligent experiences that scale across every surface
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Spacins partners with founders to weave AI, product design, and systems thinking into launch-ready products. From immersive web to embedded copilots, we help ambitious teams ship faster.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(14,165,233,0.35)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 hover:bg-sky-400"
              >
                Start a project
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-400/60 hover:text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                Explore services
                <span aria-hidden className="inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-between"
        >
          <motion.ul className="flex flex-wrap justify-center gap-3 text-sm text-slate-300" role="list">
            {heroHighlights.map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                {item}
              </motion.li>
            ))}
          </motion.ul>
          <div className="flex gap-6 text-left">
            {heroStats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-slate-950/40 backdrop-blur-sm px-5 py-4 shadow-[0_20px_45px_-30px_rgba(59,130,246,0.6)]"
              >
                <span className="block text-2xl font-semibold text-white">{stat.value}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
