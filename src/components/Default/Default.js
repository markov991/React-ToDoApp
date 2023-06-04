import React from "react";
import "./Default.css";

const Default = ({ onClick }) => {
  return (
    <div className="default-filter" onClick={onClick}>
      DEFAULT
    </div>
  );
};
export default Default;
