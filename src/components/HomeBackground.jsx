import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function AnimatedParticles() {
  const particlesRef = useRef();

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={particlesRef}>
      <Stars radius={100} depth={50} count={1500} factor={4} fade />
    </group>
  );
}

export default function HomeBackground() {
  return (
    <Canvas className="absolute inset-0">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedParticles />
    </Canvas>
  );
}
