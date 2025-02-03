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
import { useEffect, useState } from "react";
import "./App.css";
export default function App() {
  const [name, setname] = useState("SHAYAN ISHAQ JANJUA");
  const font = useFont.preload("/fonts/outfit.json");
  /*useEffect(() => {
    const typing = () => {
      if (name.length > 0) {
        if (name[1] === "|") {
          setname = "|";
        } else {
          setname(name.slice(0, -1) + "|");
        }
      }
    };
    if (name.length > 1) {
      typing();
    }
  }, name);*/

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#fffced" }}
        camera={{
          position: [0, 0, 10],
          fov: 70,
          near: 0.1,
          far: 1000,
        }}>
        <Physics gravity={[0, 9.81, 0]}>
          <RigidBody
            colliders="hull"
            type="dynamic"
            enabledRotations={[true, true, false]}
            enabledTranslations={[true, true, false]}
            position={[0, 0, 0]}>
            <Text textAlign="center" font={font} color="#000005"></Text>
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshPhysicalMaterial visible={false} />
            </mesh>
          </RigidBody>
        </Physics>
      </Canvas>

      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
        }}>
        <div
          className="move"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "4vw",
            margin: 0,
            padding: 0,
            alignContent: "center",
            display: "grid",
          }}>
          <div
            style={{
              gridColumn: 1,
              gridRow: 1,
            }}>
            <p
              style={{
                position: "relative",
                zIndex: 1,
              }}
              className="name">
              SHAYAN ISHAQ JANJUA
            </p>
          </div>
          <div
            style={{
              gridColumn: 1,
              gridRow: 1,
            }}>
            <p
              style={{
                position: "relative",
                zIndex: 0,
                textAlign: "left",
              }}
              className="name2">
              SIJ
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
