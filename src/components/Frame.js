import React from "react";
import { Link } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = ({ pages, changePallete }) => {
  return (
    <>
      <div className={styles.frame}>
        <div className="frame__title-wrap">
          <h1 className={styles.title}>The roadmap</h1>
        </div>
        <ul className={styles.feature_list}>
          <li>
            <Link
              onClick={() => changePallete(1)}
              to={pages.architecture.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Software Architecture
            </Link>
          </li>
          <li>
            <Link
              onClick={() => changePallete(2)}
              to={pages.algorithms.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Algorithms
            </Link>
          </li>
          <li>
            <Link
              onClick={() => changePallete(3)}
              to={pages.laravel.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Laravel
            </Link>
          </li>
          <li>
            <Link onClick={() => changePallete(4)} to={pages.react.link} className={`${styles.link} ${styles.linkio}`}>
              React
            </Link>
          </li>
          <li>
            <Link onClick={() => changePallete(5)} to={pages.vue.link} className={`${styles.link} ${styles.linkio}`}>
              Vue
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Frame;
