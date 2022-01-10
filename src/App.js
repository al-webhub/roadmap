import React, { Suspense } from "react";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";
import * as THREE from "three";
import styles from "./App.module.css";

const color = new THREE.Color(0xcccccc);
const color2 = new THREE.Color(0xff0000);
const fog = new THREE.Fog(color2, 0, 400);

function App() {
  return (
    <Suspense fallback={null}>
      <main>
        <Frame />

        <div className={styles.content}>
          
          <Landscape fog={fog} background={color} />
        </div>
        <div className={styles.overlay}></div>
      </main>
    </Suspense>
  );
}

export default App;
