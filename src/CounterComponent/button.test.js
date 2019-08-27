import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CounterComponent from ".";
import { Provider } from "mobx-react";
import CounterStore from "../Store/CounterStore";

describe("button rendering ", () => {
  it("should test Increment Button render in UI", () => {
    const counterStore = new CounterStore();
    const { getByText } = render(
      <Provider counterStore={counterStore}>
        <CounterComponent select="Increment" />
      </Provider>
    );
    const incrementButton = getByText("Increment");
    expect(incrementButton).toBeDefined();
  });
  it("should test Increment Button handleClick function", () => {
    const counterStore = new CounterStore();
    const { getByText } = render(
      <Provider counterStore={counterStore}>
        <CounterComponent select="Increment" />
      </Provider>
    );
    fireEvent.click(getByText("Increment"));
    expect(counterStore.counter).toBe(1);
  });
  it("should test Decrement Button render in UI", () => {
    const counterStore = new CounterStore();
    const { getByText } = render(
      <Provider counterStore={counterStore}>
        <CounterComponent select="Decrement" />
      </Provider>
    );
    const decrementButton = getByText("Decrement");
    expect(decrementButton).toBeDefined();
  });
});
