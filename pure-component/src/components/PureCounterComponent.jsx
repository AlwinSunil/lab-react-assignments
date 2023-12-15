import React, { PureComponent } from "react";

export default class PureCounterComponent extends PureComponent {
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
    console.log("This is Pure Component");

    return (
      <div>
        <h1>Pure Component</h1>
        <p className="count">{this.state.count}</p>
        <button onClick={this.handleToggle}>Set Toggle</button>
        <button onClick={this.handleOnClick}>Counter</button>
      </div>
    );
  }
}
