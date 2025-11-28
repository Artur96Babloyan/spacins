"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect, useState, Suspense } from "react";
import * as THREE from "three";

function FloatingOrb({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta * speed;
    
    // Smooth floating motion
    meshRef.current.position.y = position[1] + Math.sin(timeRef.current) * 0.6;
    meshRef.current.position.x = position[0] + Math.cos(timeRef.current * 0.7) * 0.3;
    
    // Smooth rotation
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.z += delta * 0.2;
    
    // Gentle pulsing
    const scale = 1 + Math.sin(timeRef.current * 1.5) * 0.15;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.25}
        metalness={0.7}
        roughness={0.3}
      />
    </mesh>
  );
}

function ParticleField({ count = 40 }: { count?: number }) {
  const particlesRef = useRef<THREE.Points>(null);
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
    particlesRef.current.rotation.y += 0.0005;
    particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial size={0.06} color="#60a5fa" transparent opacity={0.5} />
    </points>
  );
}

export default function Scene3D() {
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
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <pointLight position={[-10, -10, -10]} intensity={0.7} color="#a78bfa" />
          <pointLight position={[0, 10, -5]} intensity={0.6} color="#06b6d4" />
          
          <FloatingOrb position={[-3, 2, -2]} color="#38bdf8" speed={0.5} />
          <FloatingOrb position={[3, -2, -3]} color="#a78bfa" speed={0.7} />
          <FloatingOrb position={[0, 3, -4]} color="#06b6d4" speed={0.6} />
          <FloatingOrb position={[-2, -3, -3]} color="#34d399" speed={0.55} />
          
          <ParticleField count={35} />
        </Canvas>
      </Suspense>
    </div>
  );
}

