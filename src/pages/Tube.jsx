import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gltf } from "@react-three/drei";

export default function Tube(s) {
  const scroll = useScroll();
  useFrame((state, delta) => {
    console.log("sc = " + scroll.el.scrollTop);
    if (s.s.b == 1) {
      scroll.el.scrollTop = scroll.el.scrollHeight * s.s.s;
      s.s.b = 0;
      console.log(JSON.stringify(s.s));
    }
    if (scroll.offset < 0.23) {
      let pc = scroll.offset / 0.23;
      let camangle = Math.min((Math.PI / 2) * pc + 0.2, Math.PI / 2);
      state.camera.rotation.set(0, camangle, 0);
      state.camera.position.set(
        3 * Math.cos(Math.PI / 2 - camangle) + (1 - pc) / 2,
        0,
        3 * Math.sin(Math.PI / 2 - camangle) + (1 - pc) * 4
      );
    } else {
      state.camera.position.set(3, 0, 0);
      state.camera.rotation.set(0, Math.PI / 2, 0);
    }

    //2,0,12 begin position
    //0,0.2,0 begin rotation
    //3,0,5 end position
    //0,Math.PI/2,0 end rotation
    //state.camera.rotation.set(0, 0, 0);
  });
  return <Gltf src={"tube.glb"} position={[0, -2, -5.1]} />;
}
