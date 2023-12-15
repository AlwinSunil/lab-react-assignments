import React, { useState } from "react";

const RenderProps = (props) => {
  const { render } = props;

  const [count, setCount] = useState(0);

  const handleCountAction = () => {
    setCount(count + 1);
  };

  return <div>{render(count, handleCountAction)}</div>;
};

export default RenderProps;
