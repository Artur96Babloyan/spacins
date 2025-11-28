"use client";

import Navbar from "@/components/Navbar";
import BlogGallery from "@/components/BlogGallery";
import SectionReveal from "@/components/SectionReveal";
import ScrollScene from "@/components/ScrollScene";
import { blogEntries } from "@/data/blogs";
import { motion } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const ScrollSceneDynamic = dynamic(() => import("@/components/ScrollScene"), { ssr: false });

export default function BlogsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <ScrollSceneDynamic containerRef={containerRef} />
      <Navbar />
      <div ref={containerRef} className="relative isolate pt-24 pb-24 z-10">
        {/* Hero Section */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
              aria-hidden
            />
            Field notes
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Stories from building the future with Spacins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl"
          >
            We publish experiments, playbooks, and reflections from the frontier of AI products, spatial experiences, and
            resilient infrastructure. Dive into our notebooks—no NDAs required.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8"
          >
            {[
              { value: blogEntries.length, label: "Stories" },
              { value: "6", label: "Categories" },
              { value: "2025", label: "Latest" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 shadow-[0_20px_45px_-30px_rgba(59,130,246,0.6)]"
              >
                <span className="block text-2xl font-semibold text-white">{stat.value}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.3em] text-slate-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Blog Gallery */}
        <section className="mt-20 px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <BlogGallery items={blogEntries} />
          </SectionReveal>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/20 via-slate-950 to-slate-950 p-10 shadow-[0_45px_90px_-40px_rgba(14,165,233,0.5)]">
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white">Want to stay updated?</h2>
              <p className="mt-4 text-slate-300">
                We publish new field notes every few weeks. Follow along as we build the future.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white"
              >
                Subscribe to updates
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

