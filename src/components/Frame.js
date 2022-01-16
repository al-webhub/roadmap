import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ffbe0d" : "#000",
              })}
              onClick={() => changePallete(1)}
              to={pages.architecture.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Software development
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ffbe0d" : "#000",
              })}
              onClick={() => changePallete(2)}
              to={pages.algorithms.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Algorithms
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ffbe0d" : "#000",
              })}
              onClick={() => changePallete(3)}
              to={pages.react.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              React
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#ffbe0d" : "#000",
              })}
              onClick={() => changePallete(4)}
              to={pages.vue.link}
              className={`${styles.link} ${styles.linkio}`}
            >
              Vue
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Frame;
