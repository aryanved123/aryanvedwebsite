import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function Project3D() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <MeshWobbleMaterial attach="material" factor={0.5} speed={1} color="#3498db" />
    </mesh>
  );
}
