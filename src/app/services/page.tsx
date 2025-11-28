"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";
import { serviceTracks, supportModels } from "@/data/services";

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-24 pb-20 z-10">
        <ParallaxSection speed={0.2}>
          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
            Services
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Multidisciplinary teams designed to ship end-to-end
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300">
            Whether you need a single sprint or a long-term embedded squad, Spacins assembles the mix of research, design,
            engineering, and AI expertise required to launch with confidence.
          </p>
        </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
            {serviceTracks.map((track) => (
              <article
                key={track.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-sky-400/60 hover:bg-white/10"
              >
                <div className="absolute -right-16 top-1/3 h-32 w-32 rounded-full bg-sky-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-70" aria-hidden />
                <h2 className="text-xl font-semibold text-white">{track.name}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">{track.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-400" role="list">
                  {track.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="grid gap-6 lg:grid-cols-3">
              {supportModels.map((support) => (
                <article
                  key={support.title}
                  className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition hover:border-sky-400/60 hover:bg-slate-950/80"
                >
                  <h3 className="text-lg font-semibold text-white">{support.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{support.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/10 via-slate-950 to-slate-950 p-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Let’s co-design your next sprint</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Tell us where you’re headed and we’ll craft a roadmap tailored to your team.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-5 py-2.5 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
              >
                Book a working session
              </Link>
            </div>
          </div>
        </ParallaxSection>
      </div>
    </main>
  );
}

