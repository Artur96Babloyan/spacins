"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";
import { processPhases } from "@/data/process";

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-24 pb-20 z-10">
        <ParallaxSection speed={0.2}>
          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
            Process
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            A transparent path from idea to intelligent product
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300">
            We organise engagements into clear phases, with ceremonies and measures of success at every step. You’ll always
            know what’s next and how we’re tracking impact.
          </p>
        </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="mt-16 px-4 sm:px-6 lg:px-8">
          <ol className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2" role="list">
            {processPhases.map((phase, index) => (
              <li
                key={phase.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-sky-400/60 hover:bg-white/10"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-500/10 blur-xl transition duration-500 group-hover:opacity-80" aria-hidden />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/60 bg-slate-950/80 text-base font-semibold text-sky-200">
                  0{index + 1}
                </span>
                <h2 className="mt-6 text-xl font-semibold text-white">{phase.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{phase.description}</p>
              </li>
            ))}
          </ol>
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">Rituals that keep us aligned</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-300" role="list">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                Weekly playback sessions with open Figma, Notion, and Git threads.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                Decision logs and Loom walkthroughs to clarify trade-offs in real time.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                Instrumentation dashboards to track adoption, reliability, and quality.
              </li>
            </ul>
          </div>
          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/10 via-slate-950 to-slate-950 p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Ready to map your next milestone?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                We’ll co-create a plan, identify success metrics, and start the countdown.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Schedule a workshop
            </Link>
          </div>
        </ParallaxSection>
      </div>
    </main>
  );
}

