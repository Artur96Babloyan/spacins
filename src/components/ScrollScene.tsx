"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";

function ScrollOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const scrollRef = useRef(0);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth rotation based on time
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    
    // Gentle floating motion
    meshRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    meshRef.current.position.x = Math.cos(time * 0.4) * 0.2;
    
    // Pulsing scale
    const scale = 1 + Math.sin(time * 0.8) * 0.1;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -5]}>
      <sphereGeometry args={[1.2, 32, 32]} />
      <meshStandardMaterial
        color="#38bdf8"
        emissive="#38bdf8"
        emissiveIntensity={0.5}
        transparent
        opacity={0.25}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;
  const positionsRef = useRef<Float32Array | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  if (!positionsRef.current) {
    positionsRef.current = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positionsRef.current[i] = (Math.random() - 0.5) * 25;
    }
  }

  useEffect(() => {
    if (geometryRef.current && positionsRef.current) {
      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positionsRef.current, 3));
    }
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y += 0.001;
    particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial size={0.08} color="#60a5fa" transparent opacity={0.5} />
    </points>
  );
}

export default function ScrollScene({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#a78bfa" />
          <pointLight position={[0, 10, -5]} intensity={0.5} color="#06b6d4" />
          
          <ScrollOrb />
          <FloatingParticles />
        </Canvas>
      </Suspense>
    </div>
  );
}

