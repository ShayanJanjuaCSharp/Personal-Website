import { MeshPortalMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Vector3 } from "three";
import * as easing from "maath/easing";

export default function Projects(props) {
  return (
    <>
      <ambientLight intensity={0.1} />
      <color attach="background" args={["#bdbba2"]} />
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </>
  );
}
