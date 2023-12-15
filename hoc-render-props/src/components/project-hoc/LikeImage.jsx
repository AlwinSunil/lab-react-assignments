import React from "react";
import HOC from "./HOC";

function LikeImage(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default HOC(LikeImage);
