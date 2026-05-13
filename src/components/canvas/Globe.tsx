"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Globe() {
  const pointsRef = useRef<THREE.Points>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Küre üzerindeki noktalar (Dünya simülasyonu)
  const particleCount = 1500;
  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const lPos = [];
    
    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const r = 2.5; // Yarıçap
      
      const x = r * Math.cos(theta) * Math.sin(phi);
      const y = r * Math.sin(theta) * Math.sin(phi);
      const z = r * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Rastgele bağlantı çizgileri (Veri ağını simüle etmek için)
      if (Math.random() > 0.95 && i > 0) {
        lPos.push(x, y, z);
        // Küre üzerinde başka bir rastgele noktaya bağla
        const targetI = Math.floor(Math.random() * i);
        lPos.push(pos[targetI * 3], pos[targetI * 3 + 1], pos[targetI * 3 + 2]);
      }
    }
    return { positions: pos, linePositions: new Float32Array(lPos) };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.1;
      pointsRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
    if (linesRef.current) {
      linesRef.current.rotation.y = time * 0.1;
      linesRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.2) * 0.1;
      ring1Ref.current.rotation.z = -time * 0.05;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = Math.PI / 2;
      ring2Ref.current.rotation.y = time * 0.08;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#00e5ff" transparent opacity={0.6} sizeAttenuation={true} blending={THREE.AdditiveBlending} />
      </points>

      {/* Ağ Bağlantı Çizgileri */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={linePositions.length / 3} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
      </lineSegments>

      {/* Uydu/Veri Yörünge Halkaları */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#00e5ff" transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
      </mesh>
      
      {/* Merkez Karadelik/Gölge */}
      <mesh>
        <sphereGeometry args={[2.4, 32, 32]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  );
}
