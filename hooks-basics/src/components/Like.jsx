import { useState } from "react";

function Like() {
  const [likeCount, setLikeCount] = useState(0);

  return (
    <div>
      <p style={{ fontWeight: "700" }}>{likeCount}</p>
      <button onClick={() => setLikeCount((prev) => prev + 1)}>Like</button>
    </div>
  );
}

export default Like;
