import { Fisheye, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Gltf } from "@react-three/drei";

export default function Projects(props) {
  return (
    <>
      <hemisphereLight intensity={0.5} color="white" groundColor="black" />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/leadenhall_market_4k.hdr"
        ground={{ height: 5, radius: 40, scale: 20 }}
      />
      <Gltf
        src={"./models/ps1.glb"}
        position={[-1.7, -2, -1.5]}
        scale={0.4}
        rotation={[0, Math.PI / 4, 0]}
        onClick={() => console.log("ps1")}
      />
      <Gltf
        src={"./models/hl2crate.glb"}
        position={[0, -1.75, -1.5]}
        scale={1.7}
        rotation={[0, Math.PI / 4, 0]}
        onClick={() => console.log("hl2crate")}
        onPointerEnter={(e) => (e.object.material.emissive = "hotpink")}
        onPointerLeave={(e) => (e.object.material.emissive = "none")}
      />
      <Gltf
        src={"./models/C2.glb"}
        position={[1.8, -2, -1.5]}
        rotation={[0, Math.PI / 4, 0]}
        scale={1.5}
        onClick={() => console.log("C2")}
      />
    </>
  );
}
