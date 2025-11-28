"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogEntry } from "@/data/blogs";

function Card3D({ post, index }: { post: BlogEntry; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = Math.sin(time * 0.5 + index) * 0.1;
    meshRef.current.position.y = Math.sin(time * 0.3 + index) * 0.1;

    if (hovered) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.scale.lerp(new THREE.Vector3(1.05, 1.05, 1.05), 0.1);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <boxGeometry args={[4, 5, 0.2]} />
      <meshStandardMaterial
        color={hovered ? "#1e40af" : "#0f172a"}
        metalness={0.3}
        roughness={0.4}
        emissive={hovered ? "#3b82f6" : "#1e3a8a"}
        emissiveIntensity={hovered ? 0.3 : 0.1}
      />
    </mesh>
  );
}

export default function BlogCard3D({ post, index }: { post: BlogEntry; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/80"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <Card3D post={post} index={index} />
          </Canvas>
        </div>
        <div className="relative z-10 h-full">
          <Image src={post.image} alt={post.title} fill className="object-cover opacity-90" priority={index === 0} />
        </div>
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
        <div className="absolute left-6 top-6 z-30 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100">
          {post.category}
        </div>
      </div>
      <div className="relative z-10 space-y-5 px-8 py-7">
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
          <span aria-hidden className="inline-flex h-2 w-2 rounded-full bg-sky-300" />
        </Link>
      </div>
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 ${post.glow}`}
      />
    </motion.article>
  );
}

