import React, { Component } from "react";

class SimpleCounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      toggleStatus: true,
    };
  }

  handleToggle = () => {
    this.setState({ ...this.state, toggleStatus: !this.state.toggleStatus });
  };

  handleOnClick = () => {
    if (this.state.toggleStatus) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count,
      });
    }
  };

  render() {
    console.log("This is Simple Component");

    return (
      <div>
        <h1>Simple Component</h1>
        <p className="count">{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleOnClick}>Counter</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
