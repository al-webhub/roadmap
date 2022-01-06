import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";



function App() {
  return (
    <main>
      <Frame />
      <div class="content">
        <Landscape />
        <h2 class="content__title"></h2>
        <p class="content__subtitle"></p>
      </div>
      <div class="overlay"></div>
    </main>
  );
}

export default App;
