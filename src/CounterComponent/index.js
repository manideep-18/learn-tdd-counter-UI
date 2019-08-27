import React, { Component } from "react";
import { CounterComponentBg, IncrementButton } from "./styledComponents";
import { inject } from "mobx-react";
@inject("counterStore")
class CounterComponent extends Component {
  handleClick = () => {
    this.props.counterStore.IncrementCounter();
  };
  render() {
    return (
      <CounterComponentBg>
        {this.props.counterStore.counter}
        <IncrementButton>Increment</IncrementButton>
      </CounterComponentBg>
    );
  }
}
export default CounterComponent;
