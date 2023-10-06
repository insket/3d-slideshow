import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import { Scene } from "./components/Scene";
import { Overlay } from "./components/Overlay";


function App() {
  return (
    <>
      <Leva  />
      <Overlay />

      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Scene />
      </Canvas>
    </>
  );
}

export default App;
