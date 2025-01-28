"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the Canvas component with no SSR
const Scene = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  {
    ssr: false,
    loading: () => <div>Loading...</div>,
  }
);

// Create a separate component for the 3D content
function ThreeScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Suspense fallback={<div>Loading 3D scene...</div>}>
        <Scene>
          <ThreeScene />
        </Scene>
      </Suspense>
    </div>
  );
}
