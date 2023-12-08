import { useContext } from "react";
import { ToggleTheme } from "../App";
import Content from "./Content";
import Like from "./Like";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <div style={themeStyle}>
      <Content />
      <Like />
    </div>
  );
}

export default UseContext;
