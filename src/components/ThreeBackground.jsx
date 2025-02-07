import { useEffect, useRef } from "react";
import {
  BoxGeometry,
  CineonToneMapping,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  WebGLRenderer,
} from "three";
import { OrbitControls } from "three-stdlib";

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    console.log("Initializing Three.js Interactive Background...");

    // Create a scene
    const scene = new Scene();

    // Create a camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Create a renderer
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x090909);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.toneMapping = CineonToneMapping;

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement); // Attach the renderer to the DOM
    }

    // Create a cube
    const geometry = new BoxGeometry();
    const material = new MeshStandardMaterial({ color: 0x00ff00 });
    const cube = new Mesh(geometry, material);
    cube.castShadow = true;
    scene.add(cube);

    // Create a plane
    const groundGeometry = new PlaneGeometry(10, 10);
    const groundMaterial = new MeshStandardMaterial({ color: 0x808080 });
    groundMaterial.roughness = 0.6;
    groundMaterial.metalness = 0.4;
    const ground = new Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);

    // Add a light
    const light = new DirectionalLight(0xffffff, 1);
    light.position.set(0, 5, 0);
    light.castShadow = true;
    scene.add(light);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.update();

    // Animation loop
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate); // Keep the animation going
    };
    animate();

    // Resize handler
    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    // Cleanup function to avoid memory leaks
    return () => {
      window.removeEventListener("resize", resize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement); // Remove renderer from DOM
      }
      renderer.dispose(); // Dispose of the renderer
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0"
    ></div>
  );
}
