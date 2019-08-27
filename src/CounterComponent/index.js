import React, { Component } from "react";
import { CounterComponentBg, IncrementButton } from "./styledComponents";

class CounterComponent extends Component {
  render() {
    return (
      <CounterComponentBg>
        <IncrementButton>Increment</IncrementButton>
      </CounterComponentBg>
    );
  }
}
export default CounterComponent;
