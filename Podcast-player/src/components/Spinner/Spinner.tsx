import { memo } from "react";
import style from "./Spinner.module.css";

export const Spinner = memo(function Spinner() {
  return (
    <div className={style.skCubeGrid}>
      <div className={`${style.skCube} ${style.skCube1}`}></div>
      <div className={`${style.skCube} ${style.skCube2}`}></div>
      <div className={`${style.skCube} ${style.skCube3}`}></div>
      <div className={`${style.skCube} ${style.skCube4}`}></div>
      <div className={`${style.skCube} ${style.skCube5}`}></div>
      <div className={`${style.skCube} ${style.skCube6}`}></div>
      <div className={`${style.skCube} ${style.skCube7}`}></div>
      <div className={`${style.skCube} ${style.skCube8}`}></div>
      <div className={`${style.skCube} ${style.skCube9}`}></div>
    </div>
  );
});
