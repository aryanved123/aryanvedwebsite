import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function Project3D() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.25;
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.08;
      const s = 1.5 + Math.sin(t * 0.9) * 0.03; // subtle breathing
      meshRef.current.scale.set(s, s, s);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0.1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      {/* keep your color vibe; added a touch more wobble for life */}
      <MeshWobbleMaterial factor={0.6} speed={1} color="#3498db" />
    </mesh>
  );
}
