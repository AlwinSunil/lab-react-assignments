import { useEffect, useState } from "react";

function Content() {
  const [load, setLoad] = useState(false);
  const [contentActive, setContentActive] = useState(false);

  useEffect(() => {
    if (load) {
      alert("Content Button Clicked");
    }
    setLoad(true);
  }, [contentActive]);

  return (
    <div>
      {contentActive && (
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
          maxime a nihil odio perferendis nam quasi recusandae? Voluptas ullam
          ipsa quo accusamus! Tenetur fuga ducimus omnis laborum dolorum
          possimus minus laudantium repudiandae, voluptatibus accusamus tempore
          nisi dolore quia maiores sit et eaque. Unde dolor tempora nostrum.
          Facere labore voluptatum dolor, illum libero qui nisi amet vero quod.
          Fugit voluptatem saepe doloribus quam? Magni voluptate provident
          maxime minus accusantium officiis unde quos et impedit nobis eius
          fugit ad, nihil officia eligendi!
        </div>
      )}

      <br />
      <button onClick={() => setContentActive(!contentActive)}>Content</button>
    </div>
  );
}

export default Content;
