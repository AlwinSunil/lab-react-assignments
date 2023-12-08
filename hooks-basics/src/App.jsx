import React, { useState } from "react";
import UseContext from "./components/UseContext";
import "./App.css";

export const ToggleTheme = React.createContext();

function App() {
  const [state, setState] = useState(true);

  const handleToggle = () => {
    setState((state) => !state);
  };

  return (
    <ToggleTheme.Provider value={state}>
      <button onClick={handleToggle}>Toggle</button>
      <UseContext />
    </ToggleTheme.Provider>
  );
}

export default App;
