import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const CustomScene = ({ fog, background, children }) => {
  const { scene, camera } = useThree();

  useEffect(() => {
    scene.background = background;
    scene.fog = fog;
  }, []);

  return <>{children}</>;
};

export default CustomScene;
