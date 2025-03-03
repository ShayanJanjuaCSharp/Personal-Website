import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./App.css";
import Tube from "./pages/Tube";
import { MeshPortalMaterial } from "@react-three/drei";
import { useLocation } from "wouter";
import Frame from "./pages/Frame";
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
  //blendstate
  const [bVal, setB] = useState([0, 0, 0, 0]);
  //scroll contstant
  const [s, setS] = useState({ s: 0, b: 0 });
  const [oc, setOC] = useState(0);
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
  //back reset
  window.addEventListener("popstate", () => {
    setB([0, 0, 0, 0]);
    setOC(0);
    setS({ s: 0, b: 1 });
  });
  //setLocation
  const [, setLocation] = useLocation();

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
          <Tube s={s} b={bVal} />
          <Frame
            pos={[1.25, 2, 0]}
            txt={"Projects"}
            local={"/Projects"}
            b={bVal}
            setB={setB}
            id={0}>
            <Projects />
          </Frame>
          <Frame
            pos={[1.25, 2, -5.1]}
            txt={"Skills"}
            local={"/Skills"}
            b={bVal}
            setB={setB}
            id={1}>
            <Projects />
          </Frame>
          <Frame
            setOC={setOC}
            pos={[1.25, 2, -10.4]}
            txt={"Hobbies"}
            local={"/Hobbies"}
            b={bVal}
            setB={setB}
            id={2}>
            <Projects />
          </Frame>
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
          opacity: bVal[3] ? 0 : 1,
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

/* USE PORTALS
          <Text
            rotation={[0, Math.PI / 2, 0]}
            position={[0.2, 1.35, 0.4]}
            fontSize={0.3}
            font="./fonts/JetBrainsMono-ExtraBold.ttf">
            Projects
            <MeshTransmissionMaterial color={"#ff000a"} {...c} />
          </Text>*/
