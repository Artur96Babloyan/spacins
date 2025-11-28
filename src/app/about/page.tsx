"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import ParallaxSection from "@/components/ParallaxSection";
import SpaceTilt from "@/components/SpaceTilt";
import { AdvancedParallax, RevealText, FloatingElement } from "@/components/AdvancedParallax";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { companyInfo } from "@/data/about";

function ChapterImage({ chapter, index, containerRef }: { chapter: any; index: number; containerRef: React.RefObject<HTMLDivElement> }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150 * (0.4 + index * 0.1)]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.15]);

  return (
    <div ref={imageRef} className="group relative h-80 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <Image
          src={chapter.image}
          alt={chapter.alt || chapter.title}
          fill
          className="object-cover"
          priority={index === 0}
          unoptimized={chapter.image.startsWith("http")}
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={chapter.image}
          alt={chapter.alt || chapter.title}
          fill
          className="object-cover"
          priority={index === 0}
          unoptimized={chapter.image.startsWith("http")}
        />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 bg-sky-500/30"
      />
    </div>
  );
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, 0.3]);

  return (
    <main className="relative min-h-screen text-slate-100 antialiased overflow-hidden" style={{ backgroundColor: "transparent" }}>
      <Navbar />
      
      {/* Animated Background Layers */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="fixed inset-0 -z-10 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 h-[50rem] w-[50rem] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-[40rem] w-[40rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </motion.div>

      <div ref={containerRef} className="relative isolate pt-24 pb-20 z-10">
        {/* Hero Section with Advanced Parallax */}
        <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <AdvancedParallax speed={0.3} opacity scale>
            <FloatingElement speed={0.5}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <RevealText direction="up" delay={0}>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/80">About Spacins</p>
                </RevealText>
                <RevealText direction="up" delay={0.1}>
                  <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Building the future of intelligent products
                  </h1>
                </RevealText>
                <RevealText direction="up" delay={0.2}>
                  <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">{companyInfo.description}</p>
                </RevealText>
              </motion.div>
            </FloatingElement>
          </AdvancedParallax>
        </section>

        {/* Mission Section with Multi-layer Parallax */}
        <AdvancedParallax speed={0.4} opacity className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SpaceTilt intensity={8} className="h-full">
              <SectionReveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-slate-950/90 to-slate-950/90 backdrop-blur-md p-10 shadow-[0_45px_90px_-40px_rgba(14,165,233,0.5)]">
                <div className="relative z-10">
                  <RevealText direction="up">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/90">Our Mission</p>
                  </RevealText>
                  <RevealText direction="up" delay={0.1}>
                    <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{companyInfo.mission}</h2>
                  </RevealText>
                </div>
                <FloatingElement speed={0.3}>
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
                </FloatingElement>
                <FloatingElement speed={0.5}>
                  <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
                </FloatingElement>
              </SectionReveal>
            </SpaceTilt>
          </div>
        </AdvancedParallax>

        {/* Company Story Section */}
        <ParallaxSection speed={0.4} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionReveal className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/80">Our Story</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Building the future, one product at a time
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300 max-w-3xl mx-auto">
                {companyInfo.story.intro}
              </p>
            </SectionReveal>

            <div className="space-y-12">
              {companyInfo.story.chapters.map((chapter, index) => (
                <AdvancedParallax
                  key={chapter.title}
                  speed={0.3 + index * 0.1}
                  opacity
                  className={`flex flex-col gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  <SpaceTilt intensity={10} className="flex-1">
                    <ChapterImage chapter={chapter} index={index} containerRef={containerRef} />
                  </SpaceTilt>
                  <div className="flex-1 flex flex-col justify-center">
                    <RevealText direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80">
                        Chapter {index + 1}
                      </p>
                    </RevealText>
                    <RevealText direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1 + 0.1}>
                      <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">{chapter.title}</h3>
                    </RevealText>
                    <RevealText direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1 + 0.2}>
                      <p className="mt-4 text-base leading-7 text-slate-300">{chapter.content}</p>
                    </RevealText>
                  </div>
                </AdvancedParallax>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Values Section with Improved Parallax */}
        <ParallaxSection speed={0.2} className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionReveal className="mb-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300/80">Our Values</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  What drives us forward
                </h2>
              </motion.div>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {companyInfo.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-sky-400/60 hover:bg-white/10 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.3)]"
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-400/30 bg-sky-500/10"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3,
                      }}
                      className="inline-flex h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.7)]"
                    />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxSection>

        {/* Stats Section with Advanced Parallax */}
        <AdvancedParallax speed={0.5} opacity scale className="mt-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SpaceTilt intensity={5}>
              <SectionReveal className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {companyInfo.stats.map((stat, index) => (
                    <AdvancedParallax
                      key={stat.label}
                      speed={0.2 + index * 0.1}
                      direction={index % 2 === 0 ? "up" : "down"}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="text-center"
                      >
                        <FloatingElement speed={0.2 + index * 0.1}>
                          <span className="block text-4xl font-semibold text-white sm:text-5xl">{stat.value}</span>
                        </FloatingElement>
                        <span className="mt-2 block text-xs uppercase tracking-[0.3em] text-slate-400">
                          {stat.label}
                        </span>
                      </motion.div>
                    </AdvancedParallax>
                  ))}
                </div>
              </SectionReveal>
            </SpaceTilt>
          </div>
        </AdvancedParallax>

        {/* CTA Section with Multi-layer Parallax */}
        <AdvancedParallax speed={0.4} opacity className="mt-20 px-4 sm:px-6 lg:px-8">
          <SpaceTilt intensity={5}>
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-sky-500/30 via-slate-950/90 to-slate-950/90 backdrop-blur-md p-10 shadow-[0_45px_90px_-40px_rgba(14,165,233,0.5)]">
              <SectionReveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <RevealText direction="right">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-200/90">
                      Let&rsquo;s build together
                    </p>
                  </RevealText>
                  <RevealText direction="right" delay={0.1}>
                    <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                      Ready to ship your next intelligent product?
                    </h2>
                  </RevealText>
                  <RevealText direction="right" delay={0.2}>
                    <p className="mt-4 text-sm leading-6 text-slate-100/80">
                      We assemble the right team in under a week and stay embedded from discovery to growth. Share a brief
                      and we will schedule a strategy session within 48 hours.
                    </p>
                  </RevealText>
                </div>
                <div className="flex flex-col items-start gap-4">
                  <FloatingElement speed={0.3}>
                    <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
                      <a
                        href="mailto:hello@spacins.ai"
                        className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_20px_60px_-40px_rgba(255,255,255,0.9)] transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        hello@spacins.ai
                      </a>
                    </motion.div>
                  </FloatingElement>
                  <FloatingElement speed={0.4}>
                    <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-sky-300/80 hover:text-sky-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                      >
                        Book a strategy call
                      </Link>
                    </motion.div>
                  </FloatingElement>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-200/60">
                    Typically responds in <span className="font-semibold text-sky-200">&lt;48h</span>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </SpaceTilt>
        </AdvancedParallax>
      </div>
    </main>
  );
}

