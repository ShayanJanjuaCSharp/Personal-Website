import { Billboard, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useState } from "react";
import "./App.css";
import Tube from "./pages/Tube";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function App() {
  //scroll contstant
  const [s, setS] = useState({ s: 0, b: 0 });
  const [op, setOp] = useState(1);
  //Resume button colour
  const [resumecolour, setRc] = useState("#ffffff");
  //tube model credits
  const tubeCredds =
    "<a href='https://skfb.ly/ossIt'>Bombardier S Stock London Underground</a> by timblewee is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).";
  //width ratio
  const [wi, setwi] = useState(window.innerWidth / 1900);
  //Resive event calculates new width ratio
  window.addEventListener("resize", () => {
    let newW = window.innerWidth / 1900;
    setwi(newW);
  });

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#001024" }}
        camera={{
          position: [3, 0, 0],
          rotation: [0, Math.PI / 2, 0],
        }}>
        <ambientLight intensity={0.015} />
        <directionalLight
          position={[0, -2, 0]}
          rotation={[0, 0, Math.PI]}
          intensity={1}
        />
        <directionalLight
          position={[0, 2, 0]}
          rotation={[0, 0, 0]}
          intensity={0.1}
        />
        <ScrollControls pages={4} damping={0.2}>
          <Text
            rotation={[0, Math.PI / 2, 0]}
            position={[-0.2, 1.5, 0.6]}
            fontSize={0.3}
            color={"red"}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Projects
            <MeshTransmissionMaterial
              anisotropy={1}
              transmission={1}
              thickness={0.1}
              roughness={0.1}
              distortion={0.1}
              distortionScale={0.1}
              chromaticAberration={0.1}
              color="red"
            />
          </Text>
          <Tube s={s} />
          <mesh position={[0, -2.1, -4.2]}>
            <boxGeometry args={[4, 1, 19]} />
            <MeshTransmissionMaterial
              anisotropy={1}
              transmission={1}
              thickness={1}
              roughness={0.1}
              distortion={0.1}
              distortionScale={0.1}
              chromaticAberration={0.1}
              color="white"
            />
          </mesh>
        </ScrollControls>
        <EffectComposer>
          <Bloom intensity={0.7} />
          <Noise opacity={0.13} />
        </EffectComposer>
      </Canvas>
      <div
        className="reveal"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          backgroundColor: "#001024",
          pointerEvents: "none",
        }}></div>
      {/*<div
        style={{
          position: "absolute",
          top: "30vh",
          left: "50vw",
          width: "50vw",
          height: "100vh",
          zIndex: 1,
          textAlign: "left",
          pointerEvents: "none",
        }}>
        <h1 style={{ fontSize: "7vw" }}>I am a</h1>
        <p style={{ fontSize: "5vw" }}>{"<Web Developer/>"}</p>
        <a
          style={{ pointerEvents: "all", fontSize: "3vw" }}
          href="https://drive.google.com/file/d/1u3fPmkwKC03ZJMQS6BV5goDeWtKeTFfh/view?usp=sharing">
          Learn more about me.
        </a>
      </div>*/}
      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 5,
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
            opacity: 1,
            pointerEvents: "none",
          }}>
          <div
            style={{
              gridColumn: 1,
              gridRow: 1,
            }}>
            <p
              style={{
                position: "relative",
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
          backgroundColor: "transparent",
          zIndex: 5,
          width: "40vw",
          height: "5vh",
          top: "3%",
          right: "0",
          pointerEvents: "none",
          opacity: 0,
        }}>
        <button
          className="menuitems"
          onClick={() => {
            setS({ s: 0, b: 1 });
          }}>
          Resume
        </button>
        <button className="menuitems" onClick={() => setS({ s: 0.19, b: 1 })}>
          Projects
        </button>
        <button className="menuitems" onClick={() => setS({ s: 0.38, b: 1 })}>
          Skills
        </button>
        <button className="menuitems" onClick={() => setS({ s: 0.545, b: 1 })}>
          Hobbies
        </button>
        <button className="menuitems" onClick={() => setS({ s: 1, b: 1 })}>
          Contact
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          direction: "ltr",
          fontFamily: "jbbold",
          backgroundColor: "transparent",
          zIndex: 1,
          width: "50vw",
          height: "7vh",
          bottom: "0",
          right: "0",
          opacity: 1,
        }}>
        <p
          style={{
            position: "absolute",
            color: "grey",
            fontSize: "1vw",
            bottom: 0,
            right: "1%",
            textAlign: "right",
            backgroundColor: "transparent",
          }}>
          <a href="https://skfb.ly/ossIt">
            Bombardier S Stock London Underground
          </a>
          {" by "}
          <a href="https://sketchfab.com/timblewee">timblewee</a> is licensed
          under
          <a href="http://creativecommons.org/licenses/by/4.0/">
            {" Creative Commons Attribution"}
          </a>
          .
        </p>
      </div>
    </>
  );
}
