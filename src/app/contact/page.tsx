"use client";

import Navbar from "@/components/Navbar";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";

const contactChannels = [
  {
    label: "Email",
    value: "hello@spacins.ai",
    href: "mailto:hello@spacins.ai",
  },
  {
    label: "Workshop request",
    value: "Book a strategy session",
    href: "https://cal.com",
  },
  {
    label: "HQ",
    value: "Remote-first with hubs in New York, London, and Singapore",
    href: "",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-24 pb-20 z-10">
        <ParallaxSection speed={0.2}>
          <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">
            Contact
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Let’s map your next launch together
          </h1>
          <p className="mt-6 text-base leading-7 text-slate-300">
            Share a short brief about your product vision, current challenges, and timelines. We respond within 48 hours with
            next steps and a proposed working session.
          </p>
        </section>
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="mt-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">Send us a note</h2>
              <form className="mt-6 grid gap-4 text-left">
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Name
                  <input
                    type="text"
                    placeholder="Ada Lovelace"
                    className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Email
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-slate-300">
                  Project overview
                  <textarea
                    rows={5}
                    placeholder="Tell us about the opportunity, desired outcomes, and timelines."
                    className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
                  />
                </label>
                <button
                  type="button"
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-sky-400/50 bg-sky-500/20 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/30 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  Submit request
                </button>
              </form>
              <p className="mt-4 text-xs text-slate-500">
                We use the details solely to prepare for our initial workshop. A team member will respond within 48 hours.
              </p>
            </div>
            <aside className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-xl font-semibold text-white">Talk to us directly</h2>
              <ul className="space-y-4 text-sm text-slate-300" role="list">
                {contactChannels.map((channel) => (
                  <li key={channel.label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{channel.label}</p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="mt-3 block text-base font-semibold text-white transition hover:text-sky-200"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-base font-semibold text-white">{channel.value}</p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-sky-400/30 bg-slate-950/70 p-4 text-sm text-slate-300">
                <p>Prefer async?</p>
                <p className="mt-2">
                  Send us a Loom or deck outlining your challenge. We’ll share annotated feedback before the first call.
                </p>
              </div>
            </aside>
          </div>
        </ParallaxSection>
      </div>
    </main>
  );
}

