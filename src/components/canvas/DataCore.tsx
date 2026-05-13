"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function DataCore() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  // 2000 adet mini çip/transistör (Anakart/PCB görünümü için)
  const chipCount = 2000;
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  const [chipData] = useMemo(() => {
    const data = [];
    for (let i = 0; i < chipCount; i++) {
      // 3D bir küp yüzeyine veya rastgele noktalara dağıt
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      
      // Merkezde büyük CPU olacağı için merkezi boş bırak
      if (Math.abs(x) < 1.5 && Math.abs(y) < 1.5 && Math.abs(z) < 1.5) continue;
      
      const scaleX = 0.05 + Math.random() * 0.15;
      const scaleY = 0.05 + Math.random() * 0.15;
      const scaleZ = 0.05 + Math.random() * 0.15;
      
      data.push({ x, y, z, scaleX, scaleY, scaleZ });
    }
    return [data];
  }, [chipCount]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Yüzlerce çipi yerine yerleştir
    if (instancedMeshRef.current) {
      chipData.forEach((data, i) => {
        dummy.position.set(data.x, data.y, data.z);
        dummy.scale.set(data.scaleX, data.scaleY, data.scaleZ);
        // Her biri yavaşça dönsün veya kendi ekseninde hareket etsin
        dummy.rotation.x = time * 0.2 + i;
        dummy.rotation.y = time * 0.3 + i;
        dummy.updateMatrix();
        instancedMeshRef.current!.setMatrixAt(i, dummy.matrix);
      });
      instancedMeshRef.current.instanceMatrix.needsUpdate = true;
    }

    // Ana grubu mouse ile zıt yönde sert ve mekanik şekilde döndür
    if (groupRef.current) {
      const targetX = (state.pointer.x * Math.PI) / 2;
      const targetY = (state.pointer.y * Math.PI) / 2;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      
      // Sürekli mekanik bir rotasyon
      groupRef.current.rotation.z = time * 0.05;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.1;
      coreRef.current.rotation.x = time * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = time * 0.15;
      wireframeRef.current.rotation.x = -time * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* Merkez Dev CPU / Kuantum Bloğu */}
      <mesh ref={coreRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial 
          color="#050505" 
          metalness={1} 
          roughness={0.1} 
          envMapIntensity={2} 
        />
      </mesh>

      {/* Merkez Bloğu saran teknik wireframe kafes */}
      <mesh ref={wireframeRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial 
          color="#00e5ff" 
          wireframe={true} 
          emissive="#00e5ff" 
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Merkez etrafındaki endüstriyel kalın koruma çerçevesi */}
      <mesh>
        <torusGeometry args={[3, 0.1, 8, 4]} />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.2} />
      </mesh>
      
      <mesh rotation={[Math.PI/2, 0, 0]}>
        <torusGeometry args={[3, 0.05, 8, 4]} />
        <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.5} wireframe />
      </mesh>

      {/* Matrix tarzı yüzlerce küçük donanım çipi (Instanced Mesh for high performance) */}
      <instancedMesh ref={instancedMeshRef} args={[undefined, undefined, chipData.length]}>
        <boxGeometry args={[1, 1, 1]} />
        {/* Çiplerin siyah ve hafif yansımalı, gerçekçi SMD malzemesi gibi görünmesi */}
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.4} emissive="#002233" emissiveIntensity={0.2} />
      </instancedMesh>
      
    </group>
  );
}
