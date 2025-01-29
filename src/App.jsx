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
export default function App() {
  const name = "SHAYAN\nISHAQ\nJANJUA";
  const font = useFont.preload("/fonts/outfit.json");
  const config = {
    backside: false,
    samples: 160,
    resolution: 256,
    transmission: 1,
    roughness: 0,
    clearcoat: 0.7,
    clearcoatRoughness: 0.1,
    thickness: 200,
    ior: 1.45,
    chromaticAberration: 1,
    anisotropy: 1,
    distortion: 0.5,
    distortionScale: 0.2,
    temporalDistortion: 1,
    attenuationDistance: 0.5,
    attenuationColor: "#ffffff",
    color: "#ffffff",
  };

  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "#000" }}
      camera={{
        position: [0, 0, 10],
        fov: 70,
        near: 0.1,
        far: 1000,
      }}>
      <OrbitControls enableZoom={false} enablePan={false} />

      <Physics gravity={[0, 0, 0]}>
        {/* Center Ball */}
        <RigidBody type="fixed">
          <mesh>
            <sphereGeometry args={[1.5, 64, 64]} />
            <MeshTransmissionMaterial {...config} toneMapped={false} />
          </mesh>
          <Billboard>
            <Text
              font={font}
              position={[0, 0, 3]}
              textAlign="center"
              fontSize={0.3}>
              {name}
            </Text>
          </Billboard>
        </RigidBody>

        {/* Linkedin Ball */}
        <RigidBody type="fixed" position={[0, 0, 5]}>
          <mesh
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shayanishaqjanjua/",
                "_blank"
              )
            }
            onPointerOver={(e) => {
              e.object.material.color.set("blue");
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.object.material.color.set("royalblue");
              document.body.style.cursor = "default";
            }}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="royalblue" />
          </mesh>
          <Billboard>
            <Text
              font={font}
              position={[0, 1.5, 0]}
              textAlign="center"
              fontSize={0.3}>
              Linked In
            </Text>
          </Billboard>
        </RigidBody>

        {/*CV Ball */}
        <RigidBody type="fixed" position={[5, 0, 0]}>
          <mesh
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1u3fPmkwKC03ZJMQS6BV5goDeWtKeTFfh/view?usp=sharing",
                "_blank"
              )
            }
            onPointerOver={(e) => {
              e.object.material.color.set("crimson");
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.object.material.color.set("red");
              document.body.style.cursor = "default";
            }}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" transparent={true} />
          </mesh>
          <Billboard>
            <Text
              font={font}
              position={[0, 1.5, 0]}
              textAlign="center"
              fontSize={0.3}>
              CV
            </Text>
          </Billboard>
        </RigidBody>
        <RigidBody type="fixed" position={[5, 0, 0]}>
          <mesh
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1u3fPmkwKC03ZJMQS6BV5goDeWtKeTFfh/view?usp=sharing",
                "_blank"
              )
            }
            onPointerOver={(e) => {
              e.object.material.color.set("crimson");
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={(e) => {
              e.object.material.color.set("red");
              document.body.style.cursor = "default";
            }}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <Billboard>
            <Text
              font={font}
              position={[0, 1.5, 0]}
              textAlign="center"
              fontSize={0.3}>
              CV
            </Text>
          </Billboard>
        </RigidBody>
      </Physics>

      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.4} intensity={1} />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={[10, 10, 1]}
          />
          <Lightformer
            form="circle"
            intensity={4}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 4, 4]}
            scale={[4, 1, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={[50, 2, 1]}
          />
          <Lightformer
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
      </Environment>
    </Canvas>
  );
}
