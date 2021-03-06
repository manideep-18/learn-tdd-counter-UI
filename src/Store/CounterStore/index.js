import { observable, action } from "mobx";

class CounterStore {
  @observable counter;
  constructor() {
    this.counter = 0;
  }
  @action incrementCounter = () => {
    this.counter = this.counter + 1;
  };
  @action decrementCounter = () => {
    this.counter = this.counter - 1;
  };
  @action resetCounter = () => {
    this.counter = 0;
  };
}
export default CounterStore;
