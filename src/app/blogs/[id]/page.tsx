"use client";

import Navbar from "@/components/Navbar";
import ScrollScene from "@/components/ScrollScene";
import { blogEntries } from "@/data/blogs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const ScrollSceneDynamic = dynamic(() => import("@/components/ScrollScene"), { ssr: false });

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params?.id as string;
  const post = blogEntries.find((p) => p.id === postId);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!post) {
      router.push("/blogs");
    }
  }, [post, router]);

  if (!post) {
    return (
      <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
        <Navbar />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white">Post not found</h1>
            <Link href="/blogs" className="mt-4 inline-block text-sky-400 hover:text-sky-300">
              Back to blogs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const relatedPosts = blogEntries.filter((p) => p.id !== postId).slice(0, 3);

  return (
    <main className="relative min-h-screen text-slate-100 antialiased" style={{ backgroundColor: 'transparent' }}>
      <ScrollSceneDynamic containerRef={containerRef} />
      <Navbar />
      <div ref={containerRef} className="relative isolate z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-16">
          <div
            className={`pointer-events-none absolute inset-0 -z-10 ${post.glow} opacity-60 blur-3xl`}
            aria-hidden
          />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-sky-200/90"
              >
                {post.category}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                {post.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl"
              >
                {post.excerpt}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400"
              >
                {post.author && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400/80 to-violet-500/60" />
                    <div className="text-left">
                      <p className="font-semibold text-white">{post.author.name}</p>
                      <p className="text-xs text-slate-400">{post.author.role}</p>
                    </div>
                  </div>
                )}
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{post.publishedAt}</span>
                <span className="h-1 w-1 rounded-full bg-slate-500" />
                <span>{post.readTime} read</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative -mt-8 mb-16"
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content?.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="mb-6 text-lg leading-8 text-slate-300"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + (post.content?.length || 0) * 0.1, duration: 0.6 }}
            className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8"
          >
            {post.tags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + (post.content?.length || 0) * 0.1 + index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400/60 hover:bg-white/10"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="border-t border-white/10 bg-slate-950/50 py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-semibold text-white">Related stories</h2>
                <p className="mt-3 text-slate-400">Continue exploring our field notes</p>
              </motion.div>
              <div className="grid gap-8 md:grid-cols-3">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-sky-400/60 hover:bg-white/10"
                  >
                    <Link href={`/blogs/${relatedPost.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
                        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
                          {relatedPost.category}
                        </div>
                      </div>
                      <div className="space-y-3 p-6">
                        <h3 className="text-xl font-semibold text-white">{relatedPost.title}</h3>
                        <p className="line-clamp-2 text-sm leading-6 text-slate-300">{relatedPost.excerpt}</p>
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-500">
                          <span>{relatedPost.publishedAt}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blogs */}
        <section className="border-t border-white/10 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <Link
                href="/blogs"
                className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400/60 hover:bg-white/10 hover:text-white"
              >
                <motion.span
                  whileHover={{ x: -4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-hidden
                >
                  ←
                </motion.span>
                Back to all stories
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}

