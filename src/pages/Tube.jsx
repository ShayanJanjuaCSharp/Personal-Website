import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";

export default function Tube({ s, b }) {
  const scroll = useScroll();
  useFrame((state, delta) => {
    if (b[3] == 0) {
      if (s.b == 1) {
        scroll.el.scrollTop = scroll.el.scrollHeight * s.s;
        s.b = 0;
      }
      if (scroll.offset < 0.23) {
        let pc = scroll.offset / 0.23;
        let camangle = Math.min((Math.PI / 2) * pc + 0.3, Math.PI / 2);
        state.camera.rotation.set(0, camangle, 0);
        state.camera.position.set(
          3 * Math.cos(Math.PI / 2 - camangle) + (1 - pc) * 1.8,
          0,
          3 * Math.sin(Math.PI / 2 - camangle) + (1 - pc) * 4
        );
      } else if (scroll.offset < 0.47) {
        let pc = (scroll.offset - 0.23) / 0.24;
        state.camera.position.set(3, 0, -5 * pc);
      } else if (scroll.offset < 0.69) {
        let pc = (scroll.offset - 0.47) / 0.22;
        state.camera.position.set(3, 0, -5 - 5.5 * pc);
      } else {
        let pc = (scroll.offset - 0.69) / 0.31;
        let camangle = Math.min((Math.PI / 2) * pc, Math.PI / 2);
        state.camera.rotation.set(0, camangle + Math.PI / 2, 0);
        state.camera.position.set(
          3 * Math.cos(camangle),
          0,
          -10.5 - 5.5 * Math.sin(camangle)
        );
      }
    }

    //2,0,12 begin position
    //0,0.2,0 begin rotation
    //3,0,5 end position
    //0,Math.PI/2,0 end rotation
    //state.camera.rotation.set(0, 0, 0);
  });
  return <Gltf src={"tube.glb"} position={[0, -2, -5.1]} />;
}
