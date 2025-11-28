"use client";

import Navbar from "@/components/Navbar";
import Examples from "@/components/Examples";
import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";
import { companionHighlights, differentiatorBullets } from "@/data/companions";

export default function CompanionsPage() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-24 pb-20 z-10">
        <ParallaxSection speed={0.2}>
          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
            Spacins companions
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI copilots with the memory and context of your best operators
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300">
            Explore a gallery of domain-specific companions crafted for lending desks, trading floors, climate tech ops,
            creative studios, and beyond. Each one is tuned to your workflows with strong governance.
          </p>
          <SectionReveal className="relative mx-auto mt-10 flex h-56 w-full max-w-2xl items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src="/media/preview-companions.svg"
              alt="Companion showcase"
              fill
              className="object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/40 to-transparent" />
            <p className="relative z-10 max-w-md text-sm text-slate-100">
              Adaptive copilots blend your institutional knowledge with realtime automation—covering voice, chat, SMS, and internal tools.
            </p>
          </SectionReveal>
        </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="mt-16 px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_35px_80px_-40px_rgba(14,165,233,0.6)]">
            <Examples />
          </SectionReveal>
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {companionHighlights.map((highlight) => (
              <SectionReveal
                key={highlight.title}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-sky-400/60 hover:bg-white/10"
              >
                <h2 className="text-lg font-semibold text-white">{highlight.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">{highlight.text}</p>
              </SectionReveal>
            ))}
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.3} className="mt-20 px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-semibold text-white">What’s included in every deployment</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {differentiatorBullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]" aria-hidden />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-3xl border border-sky-400/30 bg-slate-950/70 p-6">
              <p className="text-sm leading-6 text-slate-300">
                Want a bespoke personality? We co-create custom companions with your team, including tone guides, decision trees,
                and fail-safe rules.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/10 via-slate-950 to-slate-950 p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Spin up a pilot companion in under 3 weeks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                We’ll align on tone, capabilities, and governance, then deploy across your channels.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              Launch a pilot
            </Link>
          </SectionReveal>
        </ParallaxSection>
      </div>
    </main>
  );
}

