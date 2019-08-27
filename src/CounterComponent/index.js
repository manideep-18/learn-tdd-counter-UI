import React, { Component } from "react";
import { CounterComponentBg, IncrementButton } from "./styledComponents";
import { inject } from "mobx-react";
@inject("counterStore")
class CounterComponent extends Component {
  handleClick = () => {
    this.props.counterStore.incrementCounter();
  };
  render() {
    return (
      <CounterComponentBg>
        {this.props.counterStore.counter}
        <IncrementButton onClick={this.handleClick}>Increment</IncrementButton>
      </CounterComponentBg>
    );
  }
}
export default CounterComponent;
