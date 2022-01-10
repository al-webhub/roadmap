import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { skyVertexShader, skyFragmentShader } from "../../shaders/sky.js";

const uniforms = {
  luminance: { value: 1 },
  turbidity: { value: 2 },
  rayleigh: { value: 1 },
  mieCoefficient: { value: 0.005 },
  mieDirectionalG: { value: 0.8 },
};

const Sky = (props) => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.scale.setScalar(45000);
    mesh.current.material.uniforms.turbidity.value = 13;
    mesh.current.material.uniforms.rayleigh.value = 1.2;
    mesh.current.material.uniforms.luminance.value = 1;
    mesh.current.material.uniforms.mieCoefficient.value = 0.1;
    mesh.current.material.uniforms.mieDirectionalG.value = 0.58;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxBufferGeometry position={[1, 1, 1]} />
      <ambientLight color={0xff0000} intensity={1} />
      <shaderMaterial
        uniforms={THREE.UniformsUtils.merge([THREE.ShaderLib.basic.uniforms, uniforms])}
        vertexShader={skyVertexShader}
        fragmentShader={skyFragmentShader}
        wireframe={false}
        fog={true}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

export default Sky;
