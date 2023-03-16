import React from "react";
import "./Loader.css";

const Loader = ({ size }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ '--size': `${size}px` }}
    >
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
