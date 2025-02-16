import {
  Scroll,
  ScrollControls,
  useScroll,
  Gltf,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise } from "@react-three/postprocessing";
import { Text } from "@react-three/drei";
import { useFont } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./App.css";
import { use } from "react";
import { color, PI } from "three/tsl";
import Tube from "./pages/Tube";

export default function App() {
  const [intro, setIntro] = useState("");
  const [s, setS] = useState({ s: 0, b: 0 });
  const tubeCredds =
    "<a href='https://skfb.ly/ossIt'>Bombardier S Stock London Underground</a> by timblewee is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).";
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
  });

  useEffect(() => {
    setTimeout(() => {}, 19000);
  }, []);

  return (
    <>
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "#001024" }}
        camera={{
          position: [3, 0, 0],
          rotation: [0, Math.PI / 2, 0],
        }}>
        <ambientLight intensity={0.5} />
        <ScrollControls pages={4} damping={0.2}>
          <Tube s={s} />
        </ScrollControls>
        <EffectComposer>
          <Bloom intensity={0.5} />
          <Noise opacity={0.13} />
        </EffectComposer>
      </Canvas>

      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 1,
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
                zIndex: 1,
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
          onClick={() => {
            /*window.open(
              "https://drive.google.com/file/d/1u3fPmkwKC03ZJMQS6BV5goDeWtKeTFfh/view?usp=sharing",
              "_blank"
            );*/
            setS({ s: 0, b: 1 });
          }}>
          Resume
        </button>
        <button className="menuitems" onClick={() => setS({ s: 357, b: 1 })}>
          Projects
        </button>
        <button className="menuitems">Skills</button>
        <button className="menuitems">Hobbies</button>
        <button className="menuitems">Contact</button>
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
            zIndex: 1,
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
