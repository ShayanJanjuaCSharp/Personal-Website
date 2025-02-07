import {
  OrthographicCamera,
  Scroll,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useFont } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const intro = "I am a <WebDeveloper />\nGame Developer and \nWriter.";
  const [wi, setwi] = useState(
    (90 * (window.innerWidth - 100)) / (screen.width - 100) + 15
  );
  const [offset, Setof] = useState(
    (2.3 * (window.innerWidth - 100)) / (screen.width - 100)
  );
  const [wd, setWeD] = useState("<WebDeveloper/>");
  function wdscramble() {
    let arr = wd.split("");
    arr.forEach((char) => {
      let randomChar = Math.random() * 65535;
      char = String.fromCharCode(randomChar);
    });
    setWeD(arr.join(""));
  }

  window.addEventListener("resize", () => {
    let newW = (window.innerWidth - 100) / (screen.width - 100);
    setwi(newW * 90 + 15);
    Setof(newW * 2.3);
    console.log(wi);
  });

  const scroll = useScroll();

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#fffced" }}>
        <OrthographicCamera
          makeDefault
          zoom={wi}
          near={0}
          far={2000}
          position={[offset, 0, 0]}
        />
        <ScrollControls pages={5} zIndex={0}>
          <Scroll>
            <Physics gravity={[0, -9.81, 0]}>
              <RigidBody
                colliders="hull"
                type="dynamic"
                enabledRotations={[true, true, false]}
                enabledTranslations={[true, true, false]}
                position={[0.2, 0, 0]}>
                <Text
                  textAlign="left"
                  font={"fonts/JetBrainsMono-ExtraBold.ttf"}
                  color="#000005"
                  letterSpacing={-0.03}>
                  {intro}
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
          opacity: 0,
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
