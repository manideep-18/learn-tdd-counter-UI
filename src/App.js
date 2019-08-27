import React from "react";
import "./App.css";
import CounterComponent from "./CounterComponent";
import { Provider, observer } from "mobx-react";
import CounterStore from "./Store/CounterStore";
const counterStore = new CounterStore();
@observer
class App extends React.Component {
  render() {
    return (
      <Provider counterStore={counterStore}>
        <>
          {counterStore.counter}
          <CounterComponent select="Increment" />
          <CounterComponent select="Decrement" />
          <CounterComponent select="Reset" />
        </>
      </Provider>
    );
  }
}
export default App;
