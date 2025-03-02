import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Gltf } from "@react-three/drei";

export default function Projects(props) {
  return (
    <>
      <hemisphereLight intensity={0.5} color="white" groundColor="black" />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr"
        ground={{ height: 5, radius: 40, scale: 20 }}
      />
      <Gltf src={"./models/rx7.glb"} position={[-1.7, -2, -1.5]} scale={0.14} />
      <Gltf src={"./models/mp1.glb"} position={[-0.6, -2, -1.5]} scale={0.29} />
      <Gltf src={"./models/bc.glb"} position={[1.8, -2, -1.5]} scale={0.35} />
    </>
  );
}
