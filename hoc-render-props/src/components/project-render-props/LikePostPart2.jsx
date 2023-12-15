import React from "react";

function LikePostPart2(props) {
  const { count, handleCount } = props;

  return (
    <div>
      <button onClick={handleCount}>Like Post {count}</button>
    </div>
  );
}

export default LikePostPart2;
