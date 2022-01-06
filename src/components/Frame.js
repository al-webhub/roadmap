import React from "react";
import styles from "./Frame.module.css";

const Frame = () => {
  return (
    <div className={styles.frame}>
      <div className="frame__title-wrap">
        <h1 className={styles.title}>Box demo</h1>
      </div>
    </div>
  );
};

export default Frame;
