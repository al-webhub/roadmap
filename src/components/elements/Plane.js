import React, { useRef } from "react";
import * as THREE from "three";
import { noiseShader } from "../../shaders/noise";
import { fragmentShader } from "../../shaders/fragment";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import pallete_1 from "../../assets/custom_pallete.png";
import pallete_2 from "../../assets/pallete1.png";
import pallete_3 from "../../assets/pallete5.png";
import pallete_4 from "../../assets/pallete6.png";
import pallete_5 from "../../assets/pallete8.jpg";
import pallete_6 from "../../assets/pallete.png";

const uniforms = {
  time: { type: "f", value: 0.0 },
  distortCenter: { type: "f", value: -500 },
  roadWidth: { type: "f", value: 0.1 },
  pallete: { type: "t", value: null },
  speed: { type: "f", value: 0.5 },
  maxHeight: { type: "f", value: 10.0 },
  scroll: { type: "f", value: 0.0 },
};

const palletes = [pallete_1, pallete_2, pallete_3, pallete_4, pallete_5, pallete_6];

const Plane = (props) => {
  const textures = useTexture([...palletes]);
  const mesh = useRef();

  useFrame((state) => {
    const time = performance.now() * 0.001;
    mesh.current.material.uniforms.time.value = time;
    mesh.current.material.uniforms.scroll.value = time;
    mesh.current.material.uniforms.distortCenter.value = Math.sin(time) * 0.1;
    mesh.current.material.uniforms.pallete.value = textures[props.pallete];
  });

  return (
    <mesh {...props} ref={mesh} position={[0, 0, -180]} rotation={[-1.5, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 800, 800, 800]} />
      <shaderMaterial
        uniforms={THREE.UniformsUtils.merge([THREE.ShaderLib.basic.uniforms, uniforms])}
        vertexShader={noiseShader}
        fragmentShader={fragmentShader}
        wireframe={false}
        fog={false}
      />
    </mesh>
  );
};

export default Plane;
