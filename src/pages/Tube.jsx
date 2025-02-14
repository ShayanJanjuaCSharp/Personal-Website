import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";

export default function Tube() {
  const scroll = useScroll();
  useFrame((state, delta) => {
    console.log(scroll.offset);
    state.camera.position.set(
      scroll.offset * 2,
      scroll.offset * 2,
      scroll.offset * 2
    );
  });
  return <Gltf src={"tube.glb"} position={[-2, -2, -15]} />;
}
