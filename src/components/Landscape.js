import React from "react";
import { Canvas } from "@react-three/fiber";
import Plane from "./elements/Plane";
import { useEffect } from "react";
import { render, events } from "@react-three/fiber";

const Landscape = ({ pallete }) => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      render(<Plane pallete={pallete} />, document.querySelector("canvas"), {
        events,
        size: { width: window.innerWidth, height: window.innerHeight },
      });
    });

    window.dispatchEvent(new Event("resize"));
  }, [pallete]);

  return (
    <>
      <Canvas style={{ height: "100vh" }}>
        <Plane pallete={pallete} />
      </Canvas>
    </>
  );
};

export default Landscape;
