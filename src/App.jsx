import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function App() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{
        position: [0, 5, 10],
        fov: 50,
        near: 0.1,
        far: 1000,
      }}></Canvas>
  );
}
