import {
  Billboard,
  OrbitControls,
  OrthographicCamera,
  Scroll,
  ScrollControls,
  useAspect,
} from "@react-three/drei";
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
import { viewport } from "three/tsl";
export default function App() {
  const [name, setname] = useState("SHAYAN ISHAQ JANJUA");
  const [wi, setwi] = useState(60);
  const font = useFont.preload("/fonts/jbsb.json");

  window.addEventListener("resize", () => {
    let newW = (window.innerWidth - 100) / (screen.width - 100);
    setwi(newW * 90 + 15);
    console.log(wi);
  });

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#fffced" }}>
        <OrthographicCamera
          makeDefault
          zoom={wi}
          near={0}
          far={2000}
          position={[0, 0, 0]}
        />
        <ScrollControls pages={5} zIndex={0}>
          <Scroll>
            <Physics gravity={[0, 0, 0]}>
              <RigidBody
                colliders="hull"
                type="dynamic"
                enabledRotations={[true, true, false]}
                enabledTranslations={[true, true, false]}
                position={[-5, 3, 0]}>
                <Text
                  textAlign="center"
                  font={"fonts/JetBrainsMono-Bold.ttf"}
                  color="#000005">
                  I'm a
                </Text>
                <Text
                  position={[2.5, -1.5, 0]}
                  fontSize={0.9}
                  textAlign="left"
                  font={"fonts/JetBrainsMono-Bold.ttf"}
                  color="#000005">
                  {"<WebDeveloper/>"}
                </Text>
                <Text
                  position={[2.3, -2.5, 0]}
                  fontSize={0.8}
                  textAlign="left"
                  font={"fonts/Android.ttf"}
                  color="#000005">
                  {"App Developer"}
                </Text>
                <Text
                  position={[2.5, -3.5, 0]}
                  fontSize={1}
                  textAlign="left"
                  font={"fonts/MC.ttf"}
                  color="#000005">
                  {"G   me Devel   per"}
                </Text>
                <Text
                  position={[-0.6, -3.55, 0]}
                  fontSize={0.8}
                  textAlign="left"
                  font={"fonts/PS.ttf"}
                  color="#000005">
                  {"T"}
                </Text>
                <Text
                  position={[4.45, -3.55, 0]}
                  fontSize={0.8}
                  textAlign="left"
                  font={"fonts/PS.ttf"}
                  color="#000005">
                  {"C"}
                </Text>
                <Text
                  position={[0.2, -4.5, 0]}
                  fontSize={0.9}
                  textAlign="left"
                  font={"fonts/JetBrainsMono-Regular.ttf"}
                  color="#000005">
                  {"Writer"}
                </Text>
                <mesh>
                  <boxGeometry args={[1, 1, 1]} />
                  <meshPhysicalMaterial visible={false} />
                </mesh>
              </RigidBody>
            </Physics>
          </Scroll>
        </ScrollControls>
      </Canvas>

      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
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
      <div
        className="menu"
        style={{
          position: "absolute",
          direction: "ltr",
          fontFamily: "jbbold",
          backgroundColor: "#fffced",
          zIndex: 1,
          width: "40vw",
          height: "5vh",
          top: "3%",
          right: "0",
          pointerEvents: "none",
          opacity: 1,
        }}>
        <button
          className="menuitems"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1u3fPmkwKC03ZJMQS6BV5goDeWtKeTFfh/view?usp=sharing",
              "_blank"
            )
          }>
          Resume
        </button>
        <button className="menuitems">Projects</button>
        <button className="menuitems">Skills</button>
        <button className="menuitems">Hobbies</button>
        <button className="menuitems">Contact</button>
      </div>
    </>
  );
}
