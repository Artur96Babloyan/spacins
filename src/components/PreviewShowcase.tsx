"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceTilt from "./SpaceTilt";

type PreviewItem = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  cta: {
    label: string;
    href: string;
  };
};

type PreviewShowcaseProps = {
  items: PreviewItem[];
};

const cardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.96 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function PreviewShowcase({ items }: PreviewShowcaseProps) {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <SpaceTilt key={item.title} intensity={8} className="h-full">
          <motion.article
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_70px_-45px_rgba(56,189,248,0.6)] transition hover:border-sky-400/60 hover:shadow-[0_45px_90px_-40px_rgba(56,189,248,0.85)]"
          >
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill 
                priority={index === 0} 
                className="object-cover" 
                unoptimized={item.image.startsWith("http")}
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0 to-slate-950/10 opacity-90 transition group-hover:opacity-100" />
          </div>
          <div className="flex flex-1 flex-col justify-between p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/80">{item.eyebrow}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
            <Link
              href={item.cta.href}
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-sky-100"
            >
              {item.cta.label}
              <span aria-hidden className="inline-flex h-2 w-2 rounded-full bg-sky-300" />
            </Link>
          </div>
          <div className="pointer-events-none absolute -z-10 inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </motion.article>
        </SpaceTilt>
      ))}
    </div>
  );
}

