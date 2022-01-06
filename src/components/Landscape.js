import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import CustomScene from "./elements/CustomScene";

const Box = (props) => {
  console.log(props);
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    props.direction === "-" ? (mesh.current.rotation.x -= 0.02) : (mesh.current.rotation.x += 0.02)
  );
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 2}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
};

const Landscape = ({ background, fog }) => {
  console.log(background, fog);
  return (
    <Canvas style={{ height: "80vh" }}>
      <CustomScene fog={fog} background={background}>
        {/* <ambientLight /> */}
        <pointLight position={[-10, 10, 10]} />
        <Box direction="-" position={[-1.2, 0, 0]} />
        <Box direction="+" position={[1.2, 0, 0]} />
      </CustomScene>
    </Canvas>
  );
};

export default Landscape;
