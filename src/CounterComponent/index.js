import React, { Component } from "react";
import { CounterComponentBg, CurrentButton } from "./styledComponents";
import { inject } from "mobx-react";

@inject("counterStore")
class CounterComponent extends Component {
  handleClick = () => {
    const onSelect = this.props.select;
    if (onSelect === "Increment") this.props.counterStore.incrementCounter();
    else if (onSelect === "Decrement")
      this.props.counterStore.decrementCounter();
    else {
      this.props.counterStore.resetCounter();
    }
  };
  render() {
    return (
      <CounterComponentBg>
        <CurrentButton onClick={this.handleClick}>
          {this.props.select}
        </CurrentButton>
      </CounterComponentBg>
    );
  }
}
export default CounterComponent;
