import { Billboard, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useState } from "react";
import "./App.css";
import Tube from "./pages/Tube";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useControls } from "leva";
import { attenuationDistance, clearcoat, color } from "three/tsl";
import { MeshPortalMaterial } from "@react-three/drei";
import Projects from "./pages/Projects";

export default function App() {
  const c = {
    transmissionSampler: true,
    samples: 8,
    resolution: 1024,
    transmission: 1,
    roughness: 0.08,
    thickness: 0.19,
    ior: 1.53,
    chromaticAberration: 0.77,
    anisotropy: 0.66,
    distortion: 0.73,
    distortionScale: 0.61,
    temporalDistortion: 0.85,
    clearcoat: 1,
    attenuationDistance: 8.16,
  };

  //scroll contstant
  const [s, setS] = useState({ s: 0, b: 0 });
  const [op, setOp] = useState(1);
  const [oc, setOC] = useState(0);
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
        {oc ? <OrbitControls makeDefault /> : null}
        <ScrollControls pages={4} damping={0.2}>
          {/* USE PORTALS
          <Text
            rotation={[0, Math.PI / 2, 0]}
            position={[0.2, 1.35, 0.4]}
            fontSize={0.3}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Projects
            <MeshTransmissionMaterial color={"#ff000a"} {...c} />
          </Text>
          <Text
            rotation={[0, Math.PI / 2, 0]}
            position={[0.2, 1.35, -4.5]}
            fontSize={0.3}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Skills
            <MeshTransmissionMaterial color={"green"} {...c} />
          </Text>
          <Text
            rotation={[0, Math.PI / 2, 0]}
            position={[0.3, 1.35, -9.8]}
            fontSize={0.3}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Hobbies
            <MeshTransmissionMaterial color={"blue"} {...c} />
          </Text>
          <Text
            rotation={[0, Math.PI, 0]}
            position={[0.03, 1.2, -13.8]}
            fontSize={0.3}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Contact Me
            <MeshTransmissionMaterial color={"yellow"} {...c} />
          </Text>*/}
          <Tube s={s} oc={oc} />
          <Projects oc={oc} setOC={setOC} />
          <mesh position={[1.3, 0, -5.1]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[1.8, 2.3]} />
            <Text
              fontSize={0.2}
              font="./fonts/JetBrainsMono-ExtraBold.ttf"
              position={[0, 1, 0]}
              color={"black"}>
              Skills
            </Text>
            <MeshPortalMaterial>
              <ambientLight intensity={0.1} />
              <color attach="background" args={["#"]} />
              <mesh position={[0, 0, -1]}>
                <boxGeometry args={[1, 1]} />
                <meshBasicMaterial color={"green"} />
              </mesh>
            </MeshPortalMaterial>
          </mesh>
          <mesh position={[1.3, 0, -10.4]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[1.8, 2.3]} />
            <Text
              fontSize={0.2}
              font="./fonts/JetBrainsMono-ExtraBold.ttf"
              position={[0, 1, 0]}
              color={"#000000"}>
              Hobbies
            </Text>
            <MeshPortalMaterial>
              <ambientLight intensity={0.1} />
              <color attach="background" args={["#ffffff"]} />
              <mesh position={[0, 0, -1]}>
                <boxGeometry args={[1, 1]} />
                <meshBasicMaterial color={"blue"} />
              </mesh>
            </MeshPortalMaterial>
          </mesh>
        </ScrollControls>
        <EffectComposer>
          <Bloom intensity={0.5} />
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
        {oc ? (
          <></>
        ) : (
          <>
            <button
              className="menuitems"
              onClick={() => {
                setS({ s: 0, b: 1 });
              }}>
              Resume
            </button>
            <button
              className="menuitems"
              onClick={() => setS({ s: 0.185, b: 1 })}>
              Projects
            </button>
            <button
              className="menuitems"
              onClick={() => setS({ s: 0.38, b: 1 })}>
              Skills
            </button>
            <button
              className="menuitems"
              onClick={() => setS({ s: 0.545, b: 1 })}>
              Hobbies
            </button>
            <button className="menuitems" onClick={() => setS({ s: 1, b: 1 })}>
              Contact
            </button>
          </>
        )}
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
          opacity: oc ? 0 : 1,
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
