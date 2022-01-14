import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";
import Architecture from "./pages/Architecture";
import Algorithms from "./pages/Algorithms";
import Laravel from "./pages/Laravel";
import ReactPage from "./pages/ReactPage";
import Vue from "./pages/Vue";

import { unmountComponentAtNode, render } from "@react-three/fiber";

import styles from "./App.module.css";

function App() {
  const [pallete, setPallete] = useState(0);
  const [loading, setLoading] = useState(true);

  const changePalleteHandler = (palleteNumber) => {
    setPallete(palleteNumber);
    //unmountComponentAtNode("canvas");
  };

  const pages = {
    home: {
      link: "/",
      component: <Landscape pallete={0} />,
    },
    architecture: {
      link: "/software-architecture",
      component: (
        <>
          <Architecture />
          <Landscape pallete={1} />
        </>
      ),
    },
    algorithms: {
      link: "/algorithms",
      component: (
        <>
          <Algorithms />
          <Landscape pallete={2} />
        </>
      ),
    },
    laravel: {
      link: "/laravel",
      component: (
        <>
          <Laravel />
          <Landscape pallete={3} />
        </>
      ),
    },
    react: {
      link: "/react",
      component: (
        <>
          <ReactPage />
          <Landscape pallete={4} />
        </>
      ),
    },
    vue: {
      link: "/vue",
      component: (
        <>
          <Vue />
          <Landscape pallete={5} />
        </>
      ),
    },
  };

  return (
    <Suspense fallback={null}>
      <Router>
        <Frame pages={pages} />
        <Routes>
          <Route exact path={pages.home.link} element={pages.home.component} />
          <Route exact path={pages.architecture.link} element={pages.architecture.component} />
          <Route exact path={pages.algorithms.link} element={pages.algorithms.component} />
          <Route exact path={pages.laravel.link} element={pages.laravel.component} />
          <Route exact path={pages.react.link} element={pages.react.component} />
          <Route exact path={pages.vue.link} element={pages.vue.component} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
