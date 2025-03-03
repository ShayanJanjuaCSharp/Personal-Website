import { MeshPortalMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Vector3 } from "three";
import * as easing from "maath/easing";
import { useLocation } from "wouter";
import { OrbitControls } from "@react-three/drei";
import Projects from "./Projects";

export default function Frame({ pos, txt, local, b, setB, id, children }) {
  const p = useRef();
  const mat = useRef();
  const [active, setActive] = useState(false);
  const [, setLocation] = useLocation();
  useFrame((state, delta) => {
    if (b[id] == 1 && mat.current) {
      easing.damp(mat.current, "blend", 1, 0.1, delta);
    } else {
      easing.damp(mat.current, "blend", 0, 0.1, delta);
    }
  });
  return (
    <mesh
      ref={p}
      position={pos}
      rotation={[0, Math.PI / 2, 0]}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setLocation(local);
        let newB = [...b];
        newB[id] = 1;
        newB[3] = 1;
        setB(newB);
      }}>
      {b[id] ? (
        <OrbitControls
          makeDefault
          maxPolarAngle={Math.PI / 2.1}
          enablePan={false}
        />
      ) : null}
      <planeGeometry args={[1.8, 2.3]} />
      <Text
        fontSize={0.2}
        font="./fonts/JetBrainsMono-ExtraBold.ttf"
        position={[0, 1, 0]}
        color={"#000000"}>
        {txt}
      </Text>
      <MeshPortalMaterial blend={0} ref={mat}>
        {children}
      </MeshPortalMaterial>
    </mesh>
  );
}
