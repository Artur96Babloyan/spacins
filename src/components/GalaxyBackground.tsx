"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";

function GalaxyParticle({ position, size, color }: { position: [number, number, number]; size: number; color: string }) {
  const meshRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.z = time * 0.05;
    meshRef.current.position.y = position[1] + Math.sin(time * 0.3 + position[0]) * 0.1;
  });

  return (
    <points ref={meshRef} position={position}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1}
          array={new Float32Array([0, 0, 0])}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} transparent opacity={0.6} />
    </points>
  );
}

function GalaxySpiral() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 4000;
  const positionsRef = useRef<Float32Array | null>(null);
  const colorsRef = useRef<Float32Array | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  if (!positionsRef.current) {
    positionsRef.current = new Float32Array(count * 3);
    colorsRef.current = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * 25;
      const spinAngle = radius * 1.2;
      const branchAngle = ((i % 6) / 6) * Math.PI * 2;

      const randomX = (Math.random() - 0.5) * 0.4;
      const randomY = (Math.random() - 0.5) * 0.2;
      const randomZ = (Math.random() - 0.5) * 0.4;

      positionsRef.current[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positionsRef.current[i3 + 1] = randomY * 0.3;
      positionsRef.current[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const color = new THREE.Color();
      const colorMix = Math.random();
      if (colorMix < 0.33) {
        color.setRGB(0.5, 0.95, 1); // Bright Cyan
      } else if (colorMix < 0.66) {
        color.setRGB(0.85, 0.7, 1); // Bright Violet
      } else {
        color.setRGB(0.7, 1, 1); // Bright Sky blue
      }

      colorsRef.current[i3] = color.r;
      colorsRef.current[i3 + 1] = color.g;
      colorsRef.current[i3 + 2] = color.b;
    }
  }

  useEffect(() => {
    if (geometryRef.current && positionsRef.current && colorsRef.current) {
      geometryRef.current.setAttribute("position", new THREE.BufferAttribute(positionsRef.current, 3));
      geometryRef.current.setAttribute("color", new THREE.BufferAttribute(colorsRef.current, 3));
    }
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y = time * 0.08;
    particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    particlesRef.current.rotation.z = Math.cos(time * 0.05) * 0.05;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        size={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors={true}
        transparent
        opacity={0.4}
      />
    </points>
  );
}

function NebulaCloud({ position, color, size }: { position: [number, number, number]; color: string; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    timeRef.current += delta * 0.15;
    meshRef.current.position.y = position[1] + Math.sin(timeRef.current) * 0.4;
    meshRef.current.position.x = position[0] + Math.cos(timeRef.current * 0.7) * 0.2;
    meshRef.current.rotation.z += delta * 0.08;
    meshRef.current.rotation.x += delta * 0.05;
    const scale = 1 + Math.sin(timeRef.current * 1.2) * 0.15;
    meshRef.current.scale.setScalar(size * scale);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        roughness={0.1}
        metalness={0.3}
      />
    </mesh>
  );
}

function StarField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 1200;
  const positionsRef = useRef<Float32Array | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);

  if (!positionsRef.current) {
    positionsRef.current = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positionsRef.current[i3] = (Math.random() - 0.5) * 80;
      positionsRef.current[i3 + 1] = (Math.random() - 0.5) * 80;
      positionsRef.current[i3 + 2] = (Math.random() - 0.5) * 80;
    }
  }

  useEffect(() => {
    if (geometryRef.current && positionsRef.current) {
      geometryRef.current.setAttribute("position", new THREE.BufferAttribute(positionsRef.current, 3));
    }
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    const time = state.clock.getElapsedTime();
    particlesRef.current.rotation.y += 0.0003;
    particlesRef.current.rotation.x = Math.sin(time * 0.05) * 0.02;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry ref={geometryRef} />
      <pointsMaterial
        size={0.4}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#60a5fa"
        transparent
        opacity={0.5}
      />
    </points>
  );
}

function FastAsteroid({ 
  startPosition, 
  direction, 
  speed 
}: { 
  startPosition: [number, number, number]; 
  direction: [number, number, number];
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const positionRef = useRef<THREE.Vector3>(new THREE.Vector3(...startPosition));
  const rotationSpeed = useRef({
    x: (Math.random() - 0.5) * 0.3,
    y: (Math.random() - 0.5) * 0.3,
    z: (Math.random() - 0.5) * 0.3,
  });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Move asteroid very fast
    positionRef.current.x += direction[0] * speed * delta;
    positionRef.current.y += direction[1] * speed * delta;
    positionRef.current.z += direction[2] * speed * delta;
    
    meshRef.current.position.copy(positionRef.current);
    
    // Fast rotation
    meshRef.current.rotation.x += rotationSpeed.current.x * delta * 5;
    meshRef.current.rotation.y += rotationSpeed.current.y * delta * 5;
    meshRef.current.rotation.z += rotationSpeed.current.z * delta * 5;
    
    // Reset if out of bounds
    if (Math.abs(positionRef.current.x) > 50 || 
        Math.abs(positionRef.current.y) > 50 || 
        positionRef.current.z > 10 || 
        positionRef.current.z < -50) {
      positionRef.current.set(...startPosition);
    }
  });

  return (
    <mesh ref={meshRef} position={startPosition}>
      <dodecahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial
        color="#475569"
        emissive="#1e293b"
        emissiveIntensity={0.3}
        metalness={0.6}
        roughness={0.4}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

function AsteroidField() {
  const asteroidCount = 25;
  const asteroids = useRef<Array<{
    startPosition: [number, number, number];
    direction: [number, number, number];
    speed: number;
  }>>([]);

  if (asteroids.current.length === 0) {
    for (let i = 0; i < asteroidCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 30 + Math.random() * 20;
      const startX = Math.cos(angle) * distance;
      const startY = Math.sin(angle) * distance;
      const startZ = -20 - Math.random() * 30;
      
      const dirX = (Math.random() - 0.5) * 0.5;
      const dirY = (Math.random() - 0.5) * 0.5;
      const dirZ = 0.8 + Math.random() * 0.4;
      
      asteroids.current.push({
        startPosition: [startX, startY, startZ],
        direction: [dirX, dirY, dirZ],
        speed: 8 + Math.random() * 12, // Very fast speed
      });
    }
  }

  return (
    <>
      {asteroids.current.map((asteroid, index) => (
        <FastAsteroid
          key={index}
          startPosition={asteroid.startPosition}
          direction={asteroid.direction}
          speed={asteroid.speed}
        />
      ))}
    </>
  );
}

export default function GalaxyBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ backgroundColor: 'transparent' }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 3], fov: 60 }}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
          dpr={[1, 2]}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.25} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#38bdf8" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#a78bfa" />
          <pointLight position={[0, 10, -5]} intensity={0.8} color="#06b6d4" />
          <pointLight position={[0, -10, 5]} intensity={0.7} color="#34d399" />
          <pointLight position={[8, -8, 8]} intensity={0.6} color="#f472b6" />

          {/* Galaxy Spiral */}
          <GalaxySpiral />

          {/* Nebula Clouds */}
          <NebulaCloud position={[-7, 2, -4]} color="#38bdf8" size={5} />
          <NebulaCloud position={[7, -4, -5]} color="#a78bfa" size={4.5} />
          <NebulaCloud position={[0, 5, -6]} color="#06b6d4" size={4} />
          <NebulaCloud position={[-4, -6, -4]} color="#34d399" size={4.2} />
          <NebulaCloud position={[5, 3, -7]} color="#f472b6" size={3.5} />

          {/* Star Field */}
          <StarField />

          {/* Fast Moving Asteroids */}
          <AsteroidField />
        </Canvas>
      </Suspense>
    </div>
  );
}

