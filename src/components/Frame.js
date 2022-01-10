import React from "react";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <>
      <div className={styles.frame}>
        <div className="frame__title-wrap">
          <h1 className={styles.title}>The roadmap goals</h1>
        </div>
        <ul className={styles.feature_list}>
          <li>Software Arhitecture</li>
          <li>Laravel</li>
          <li>React</li>
          <li>Vue</li>
          <li>Algorithms</li>
        </ul>
      </div>
    </>
  );
};

export default Frame;
