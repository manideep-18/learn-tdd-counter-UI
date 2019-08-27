import React, { Component } from "react";
import {
  CounterComponentBg,
  IncrementButton,
  DecrementButton,
  CurrentButton
} from "./styledComponents";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
@inject("counterStore")
class CounterComponent extends Component {
  handleClick = () => {
    const onSelect = this.props.select;
    if (onSelect === "Increment") this.props.counterStore.incrementCounter();
    else if (onSelect === "Decrement") {
      //   this.props.counterStore.decrementCounter();
    } else this.props.counterStore.resetCounter();
  };
  handleDecrementClick = () => {
    //   this.props.counterStore.decrementCounter();
  };
  render() {
    return (
      <CounterComponentBg>
        {this.props.counterStore.counter}
        <CurrentButton onClick={this.handleClick}>
          {this.props.select}
        </CurrentButton>
      </CounterComponentBg>
    );
  }
}
export default CounterComponent;
