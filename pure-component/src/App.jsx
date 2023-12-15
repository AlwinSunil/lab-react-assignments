import React, { Component } from "react";
import SimpleCounterComponent from "./components/SimpleCounterComponent";
import PureCounterComponent from "./components/PureCounterComponent";

class App extends Component {
  render() {
    return (
      <>
        <SimpleCounterComponent />
        <PureCounterComponent />
      </>
    );
  }
}

export default App;
