import { MeshPortalMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Vector3 } from "three";
import * as easing from "maath/easing";
import Projects from "./Projects";

export default function Frame(...props) {
  const p = useRef();
  const mat = useRef();
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    console.log(props.pos);
    if (active) {
      easing.damp(mat.current, "blend", 1, 0.1, delta);
      props.setOC(1);
    } else {
    }
  });
  return (
    <mesh
      ref={p}
      position={props.pos}
      rotation={[0, Math.PI / 2, 0]}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}>
      <planeGeometry args={[1.8, 2.3]} />
      <Text
        fontSize={0.2}
        font="./fonts/JetBrainsMono-ExtraBold.ttf"
        position={[0, 1, 0]}
        color={"#000000"}>
        Projects
      </Text>
      <MeshPortalMaterial blend={0} ref={mat}></MeshPortalMaterial>
    </mesh>
  );
}
