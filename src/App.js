import React, { Suspense } from "react";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";
import * as THREE from "three";

const color = new THREE.Color(0xcccccc);
const color2 = new THREE.Color(0xff0000);
const fog = new THREE.Fog(color2, 0, 400);

function App() {
  return (
    <Suspense fallback={null}>
      <main>
        <Frame />
        <div class="content">
          <Landscape fog={fog} background={color} />
          <h2 class="content__title"></h2>
          <p class="content__subtitle"></p>
        </div>
        <div class="overlay"></div>
      </main>
    </Suspense>
  );
}

export default App;
