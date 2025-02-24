import { MeshPortalMaterial } from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Vector3 } from "three";

export default function Projects() {
  const p = useRef();
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (active && p.current) {
      let pos = new Vector3();
      p.current.localToWorld(pos.set(0, 0, 0));
      console.log(pos);
    }
  });
  return (
    <mesh
      ref={p}
      position={[1.3, 0, 0]}
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
      <MeshPortalMaterial>
        <ambientLight intensity={0.1} />
        <color attach="background" args={["#ffffff"]} />
        <mesh position={[0, 0, -1]}>
          <boxGeometry args={[1, 1]} />
          <meshBasicMaterial color={"red"} />
        </mesh>
      </MeshPortalMaterial>
    </mesh>
  );
}
