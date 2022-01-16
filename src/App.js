import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame from "./components/Frame";
import Landscape from "./components/Landscape";
import Architecture from "./pages/Architecture";
import Algorithms from "./pages/Algorithms";
import Laravel from "./pages/Laravel";
import ReactPage from "./pages/ReactPage";
import Vue from "./pages/Vue";
import Preloader from "./components/elements/Preloader";
import { TransitionGroup } from "react-transition-group";

function App() {
  const [pallete, setPallete] = useState(0);
  const [dataPromise, setDataPromise] = useState();
  const changePalleteHandler = (pallete) => {
    setPallete(pallete);

    setDataPromise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 100);
      }).then(() => setDataPromise())
    );

    if (dataPromise) {
      throw dataPromise;
    }
  };

  const pages = {
    home: {
      link: "/",
      component: <></>,
    },
    architecture: {
      link: "/backend",
      component: (
        <>
          <Suspense fallback={<Preloader />}>
            <Architecture />
          </Suspense>
        </>
      ),
    },
    algorithms: {
      link: "/algorithms",
      component: (
        <>
          <Suspense fallback={<Preloader />}>
            <Algorithms />
          </Suspense>
        </>
      ),
    },
    laravel: {
      link: "/laravel",
      component: (
        <>
          <Suspense fallback={<Preloader />}>
            <Laravel />
          </Suspense>
        </>
      ),
    },
    react: {
      link: "/react",
      component: (
        <>
          <Suspense fallback={<Preloader />}>
            <ReactPage />
          </Suspense>
        </>
      ),
    },
    vue: {
      link: "/vue",
      component: (
        <>
          <Suspense fallback={<Preloader />}>
            <Vue />
          </Suspense>
        </>
      ),
    },
  };

  return (
    <TransitionGroup>
      <Router>
        <Suspense fallback={<Preloader />}>
          <Frame changePallete={changePalleteHandler} pages={pages} />
          <Routes>
            <Route exact path={pages.home.link} element={pages.home.component} />
            <Route exact path={pages.architecture.link} element={pages.architecture.component} />
            <Route exact path={pages.algorithms.link} element={pages.algorithms.component} />
            <Route exact path={pages.laravel.link} element={pages.laravel.component} />
            <Route exact path={pages.react.link} element={pages.react.component} />
            <Route exact path={pages.vue.link} element={pages.vue.component} />
          </Routes>
          <Landscape pallete={pallete} />
        </Suspense>
      </Router>
    </TransitionGroup>
  );
}

export default App;
