"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SpaceTilt from "./SpaceTilt";
import type { BlogEntry } from "@/data/blogs";

type BlogGalleryProps = {
  items: BlogEntry[];
  limit?: number;
  showReadMore?: boolean;
};

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function BlogGallery({ items, limit, showReadMore = false }: BlogGalleryProps) {
  const visibleItems = limit ? items.slice(0, limit) : items;

  return (
    <div className="mt-12 space-y-12">
      <div className="grid gap-10 lg:grid-cols-2">
        {visibleItems.map((post, index) => (
          <SpaceTilt key={post.id} intensity={10} className="h-full">
            <motion.article
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.08, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80"
            >
            <div className="relative h-56 overflow-hidden">
              <motion.div
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image src={post.image} alt={post.title} fill className="object-cover" priority={index === 0} />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
                {post.category}
              </div>
            </div>
            <div className="space-y-5 px-8 py-7">
              <h3 className="text-2xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm leading-6 text-slate-300">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                <span>{post.publishedAt}</span>
                <span>{post.readTime} read</span>
              </div>
              <Link
                href={`/blogs/${post.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-200 transition hover:text-sky-100"
              >
                Read story
                <motion.span
                  aria-hidden
                  className="inline-flex h-2 w-2 rounded-full bg-sky-300"
                  whileHover={{ scale: 1.2, x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
              </Link>
            </div>
            <div
              aria-hidden
              className={`pointer-events-none absolute inset-0 -z-10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 ${post.glow}`}
            />
          </motion.article>
          </SpaceTilt>
        ))}
      </div>

      {showReadMore && (
        <div className="flex justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-6 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Dive into the blog
          </Link>
        </div>
      )}
    </div>
  );
}

