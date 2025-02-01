import { Billboard, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Text } from "@react-three/drei";
import { useFont } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
export default function App() {
  const name = "SHAYAN\nISHAQ\nJANJUA";
  const font = useFont.preload("/fonts/outfit.json");

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" /*background: "#000"*/ }}
      camera={{
        position: [0, 0, 10],
        fov: 70,
        near: 0.1,
        far: 1000,
      }}>
      <Physics gravity={[0, 0, 0]}>
        <RigidBody
          colliders="hull"
          type="dynamic"
          enabledRotations={[true, true, false]}
          enabledTranslations={[true, true, false]}>
          <Text textAlign="center" font={font}>
            {name}
          </Text>
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshPhysicalMaterial visible={false} />
          </mesh>
        </RigidBody>
      </Physics>
    </Canvas>
  );
}
