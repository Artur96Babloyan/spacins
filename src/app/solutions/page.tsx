"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";
import { capabilityHighlights, differentiators, solutionPillars } from "@/data/solutions";

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-24 pb-20 z-10">
        <ParallaxSection speed={0.2}>
          <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <header className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
              Solution architecture
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Modular stacks built for velocity and resilience
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-300">
              Spacins assembles cross-functional squads that blueprint, prototype, and scale intelligent systems across fintech,
              spatial commerce, and AI-native platforms. Every solution prioritizes legibility, governance, and the ability to evolve.
            </p>
          </header>
        </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_-45px_rgba(56,189,248,0.7)] transition hover:border-sky-400/60 hover:shadow-[0_45px_90px_-40px_rgba(56,189,248,0.85)]"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" aria-hidden />
                <h2 className="text-xl font-semibold text-white">{pillar.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">{pillar.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-400" role="list">
                  {pillar.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]" aria-hidden />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-slate-950 p-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {capabilityHighlights.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/60 hover:bg-white/10"
                >
                  <div>
                    <span className="text-3xl font-semibold text-white">{item.metric}</span>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-slate-400">{item.metricLabel}</p>
                    <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                  </div>
                  <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" aria-hidden />
                </article>
              ))}
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.3} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold text-white">Why teams choose Spacins</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {differentiators.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-sky-400/30 bg-slate-950/60 p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Need a blueprint for your next launch?</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Share your brief and we’ll assemble a squad within a week to kick off discovery.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Start the conversation
              </Link>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </main>
  );
}

