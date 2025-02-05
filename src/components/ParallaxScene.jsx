import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere, OrbitControls, useScroll } from "@react-three/drei";

function ParallaxObject() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    ref.current.position.y = scroll.offset * 5; // Moves the object with scroll
    ref.current.rotation.y += 0.01;
  });

  return (
    <Sphere args={[1, 64, 64]} ref={ref} position={[0, 0, -3]}>
      <meshStandardMaterial color="purple" roughness={0.4} metalness={0.9} />
    </Sphere>
  );
}

export default function ParallaxScene() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 3]} />
      <ParallaxObject />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
