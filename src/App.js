import React from "react";
import "./App.css";
import CounterComponent from "./CounterComponent";
import { Provider } from "mobx-react";
import CounterStore from "./Store/CounterStore";
const counterStore = new CounterStore();
class App extends React.Component {
  render() {
    return (
      <Provider counterStore={counterStore}>
        <CounterComponent />
      </Provider>
    );
  }
}

export default App;
