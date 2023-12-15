import React from "react";

function LikeImagePart2(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button onClick={handleCount}>Like Image {count}</button>
    </div>
  );
}

export default LikeImagePart2;
