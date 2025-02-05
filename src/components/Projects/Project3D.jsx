import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { Suspense } from "react";

export default function Project3D({ image }) {
  return (
    <Canvas className="w-64 h-64">
      <Suspense fallback={<Html>Loading...</Html>}>
        <PerspectiveCamera makeDefault position={[0, 0, 2]} />
        <OrbitControls enableZoom={false} />
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <boxGeometry args={[1.5, 1, 0.1]} />
          <meshStandardMaterial>
            <textureLoader attach="map" args={[image]} />
          </meshStandardMaterial>
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} intensity={1} />
      </Suspense>
    </Canvas>
  );
}
