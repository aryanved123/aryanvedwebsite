import { useEffect, useRef } from "react";
import {
  BoxGeometry,
  CineonToneMapping,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  Group,
} from "three";
import { OrbitControls } from "three-stdlib";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("Initializing Realistic Rubik's Cube...");

    // Create Scene
    const scene = new Scene();

    // Create Camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(4, 4, 10);
    camera.lookAt(0, 0, 0);

    // Create Renderer
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x090909);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.toneMapping = CineonToneMapping;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Rubik's Cube Colors
    const colors = {
      white: 0xffffff, // Bottom
      yellow: 0xffd500, // Top
      red: 0xff0000, // Right
      orange: 0xff5800, // Left
      blue: 0x0000ff, // Back
      green: 0x009e60, // Front
      black: 0x111111, // Internal
    };

    // Function to Create a Mini-Cube with Correct Face Colors
    const createMiniCube = (x, y, z) => {
      const geometry = new BoxGeometry(0.98, 0.98, 0.98); // Slightly smaller to create spacing

      // Assign colors based on position
      const materials = [
        new MeshStandardMaterial({ color: x === 1 ? colors.red : x === -1 ? colors.orange : colors.black }), // Right / Left
        new MeshStandardMaterial({ color: x === -1 ? colors.orange : x === 1 ? colors.red : colors.black }), // Left / Right
        new MeshStandardMaterial({ color: y === 1 ? colors.yellow : colors.black }), // Top
        new MeshStandardMaterial({ color: y === -1 ? colors.white : colors.black }), // Bottom
        new MeshStandardMaterial({ color: z === 1 ? colors.green : colors.black }), // Front
        new MeshStandardMaterial({ color: z === -1 ? colors.blue : colors.black }), // Back
      ];

      const cube = new Mesh(geometry, materials);
      cube.position.set(x, y, z);
      cube.castShadow = true;
      return cube;
    };

    // Create a 3x3x3 Rubik's Cube
    const rubiksCube = new Group();
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          const miniCube = createMiniCube(x, y, z);
          rubiksCube.add(miniCube);
        }
      }
    }
    scene.add(rubiksCube);

    // Add Lighting
    const light = new DirectionalLight(0xffffff, 1.5);
    light.position.set(5, 5, 5);
    light.castShadow = true;
    scene.add(light);

    // Add Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.update();

    // Animation Loop (Rotates the Cube)
    const animate = () => {
      rubiksCube.rotation.x += 0.005;
      rubiksCube.rotation.y += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize Handler
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0"></div>;
}
