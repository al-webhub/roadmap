import React from "react";
import { Canvas } from "@react-three/fiber";
import Plane from "./elements/Plane";


const Landscape = ({ pallete }) => {
  console.log(pallete);
  return (
    <>
      <Canvas style={{ height: "100vh" }}>
        <Plane pallete={pallete} />
      </Canvas>
    </>
  );
};

export default Landscape;
