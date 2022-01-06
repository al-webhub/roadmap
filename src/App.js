import React from "react";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";
import * as THREE from "three";

const color = new THREE.Color(0x333333);
const fog = new THREE.Fog(color, 0, 400);

function App() {
  return (
    <main>
      <Frame />
      <div class="content">
        <Landscape fog={fog} background={color} />
        <h2 class="content__title"></h2>
        <p class="content__subtitle"></p>
      </div>
      <div class="overlay"></div>
    </main>
  );
}

export default App;
