import React from "react";
import "../styles/Display.css";

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display">{value && <p className="value">{value}</p>}</div>
  );
};

export default Display;
