import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const CustomScene = ({ fog, background, children }) => {
  const { scene } = useThree();

  useEffect(() => {
    scene.background = background;
    scene.fog = fog;
  }, []);

  return <>{children}</>;
};

export default CustomScene;
