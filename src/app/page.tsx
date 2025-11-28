"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Link from "next/link";
import PreviewShowcase from "@/components/PreviewShowcase";
import BlogGallery from "@/components/BlogGallery";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection, { ParallaxElement } from "@/components/ParallaxSection";
import SpaceTilt from "@/components/SpaceTilt";
import SpaceParallax from "@/components/SpaceParallax";
import { blogEntries } from "@/data/blogs";

const previewSections = [
  {
    eyebrow: "Solutions",
    title: "Modular systems for emerging categories",
    description:
      "Composable architectures for fintech, spatial commerce, and AI-native platforms. Explore how we blend research, design, and engineering to accelerate your roadmap.",
    image: "/media/preview-solutions.svg",
    cta: {
      label: "View solutions",
      href: "/solutions",
    },
  },
  {
    eyebrow: "Services",
    title: "Hands-on teams across product, design, and AI",
    description:
      "Multidisciplinary squads embedding alongside your founders and product leads. From discovery sprints to go-live, we shape the full journey.",
    image: "/media/preview-services.svg",
    cta: {
      label: "See our services",
      href: "/services",
    },
  },
  {
    eyebrow: "Companions",
    title: "Domain-tuned AI copilots ready to deploy",
    description:
      "Launch conversation-first copilots with voice, text, and workflow automations tuned to your industry. Tailored knowledge, observability, and compliance from day one.",
    image: "/media/preview-companions.svg",
    cta: {
      label: "Meet the companions",
      href: "/companions",
    },
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <Navbar />
      <div className="relative isolate pt-16 z-10">
        <ParallaxSection speed={0.3}>
          <Hero />
        </ParallaxSection>

        <ParallaxSection speed={0.4} className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="flex flex-col gap-4 text-center backdrop-blur-md bg-slate-950/50 rounded-3xl p-8 border border-white/10 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/80">
                Orbit with Spacins
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Three ways we ship impact from day zero
              </h2>
              <p className="mx-auto max-w-3xl text-sm leading-6 text-slate-400">
                Every engagement we start pairs founders with our systems strategists, product designers, and applied AI engineers.
                Explore how the experience extends beyond the homepage.
              </p>
            </SectionReveal>

            <div className="backdrop-blur-md bg-slate-950/40 rounded-3xl p-6 border border-white/10 shadow-xl">
              <PreviewShowcase items={previewSections} />
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.5} className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="flex flex-col gap-4 text-center backdrop-blur-md bg-slate-950/50 rounded-3xl p-8 border border-white/10 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/80">
                Thought starters
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Latest field notes from the Spacins blog
              </h2>
              <p className="mx-auto max-w-3xl text-sm leading-6 text-slate-400">
                We publish sprints in public—capturing experiments, playbooks, and observations from building intelligent products in fast-moving industries.
              </p>
            </SectionReveal>

            <div className="backdrop-blur-md bg-slate-950/40 rounded-3xl p-6 border border-white/10 shadow-xl">
              <BlogGallery items={blogEntries} limit={3} showReadMore />
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection speed={0.3} className="pb-20">
          <SpaceTilt intensity={5}>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/30 via-slate-950/90 to-slate-950/90 backdrop-blur-md p-10 shadow-[0_45px_90px_-40px_rgba(14,165,233,0.5)]">
              <SectionReveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/90">
                    Let&rsquo;s build the future
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                    Tell us about your next product, protocol, or platform
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-slate-100/80">
                    We assemble the right team in under a week and stay embedded from discovery to growth. Share a brief and we will schedule a strategy session within 48 hours.
                  </p>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <a
                    href="mailto:hello@spacins.ai"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_-40px_rgba(255,255,255,0.9)] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    hello@spacins.ai
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/80 hover:text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    Book a strategy call
                  </a>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200/60">
                    Typically responds in <span className="font-semibold text-sky-200">&lt;48h</span>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </SpaceTilt>
        </ParallaxSection>

        <footer className="border-t border-white/10 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Spacins. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/solutions" className="transition hover:text-sky-200">
                Solutions
              </Link>
              <Link href="/services" className="transition hover:text-sky-200">
                Services
              </Link>
              <Link href="/process" className="transition hover:text-sky-200">
                Process
              </Link>
              <Link href="/blogs" className="transition hover:text-sky-200">
                Blogs
              </Link>
              <Link href="/contact" className="transition hover:text-sky-200">
                Contact
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
