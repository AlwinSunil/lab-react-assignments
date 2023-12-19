import React from "react";
import { Provider } from "react-redux";
import LikeCounter from "./LikeCounter";
import store from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>
  );
}

export default App;
