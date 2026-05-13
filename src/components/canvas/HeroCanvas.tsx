"use client";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { DataCore } from "./DataCore";
import { Suspense } from "react";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
          <DataCore />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
