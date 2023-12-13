import React, { useEffect, useCallback, useMemo, useState } from "react";
import "./App.css";

// Do not change this
const LARGE_NUMBER = 1000000000;

function App() {
  const [value, setValue] = useState(0);
  const [dark, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");
  const [currentList, setList] = useState([]);

  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const delayFunction = useMemo(() => {
    console.log("Delay Function Ran");
    for (let index = 0; index < LARGE_NUMBER; index++) {}
    return value + 2;
  }, [value]);

  // should not change the LOGIC inside this function - you can make changes to the function but logic should NOT change
  const testFunction = useCallback(() => {
    return [value * 3, value * 4];
  }, [value]);

  // should not change this
  useEffect(() => {
    console.log("Callback Function was called");
  }, [testFunction]);

  useEffect(() => {
    if (dark) {
      setThemeName("dark");
    } else {
      setThemeName("light");
    }
  }, [dark]);

  const handleClick = () => {
    setTheme(!dark);
  };

  const handleChangeValue = () => {
    setValue(value + 1);
  };

  const handleList = () => {
    setList(testFunction());
  };

  const styleTheme = useMemo(
    () => ({
      backgroundColor: dark ? "black" : "#ccc7c7",
    }),
    [dark]
  );

  return (
    <div className="page" style={styleTheme}>
      <button onClick={handleClick}>{themeName}</button>
      <h1>{value}</h1>
      <button onClick={handleChangeValue}>Change Value</button>
      <button onClick={handleList}>Show List</button>
      <h2>{delayFunction}</h2>
      <div>
        {currentList.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })}
      </div>
    </div>
  );
}

export default App;
