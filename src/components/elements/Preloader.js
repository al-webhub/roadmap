import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "../../App.module.css";
import "./Preloader.css";

const Preloader = (props) => {
  return (
    <CSSTransition {...props} key="loading" classNames="alert" timeout={300}>
      <div className={styles.preloader}>LOADING</div>
    </CSSTransition>
  );
};

export default Preloader;
