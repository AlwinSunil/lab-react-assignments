import React, { useState } from "react";

const HOC = (OrginalComponent) => {
  const newComponent = () => {
    const [count, setCount] = useState(0);

    const handleCountAction = () => {
      setCount(count + 1);
    };

    return <OrginalComponent count={count} handleCount={handleCountAction} />;
  };

  return newComponent;
};

export default HOC;
