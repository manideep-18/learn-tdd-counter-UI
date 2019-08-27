import React from "react";
import { render } from "@testing-library/react";
import CounterComponent from ".";

describe("button rendering ", () => {
  it("should test Increment Button render in UI", () => {
    const { getByText } = render(<CounterComponent />);
    const incrementButton = getByText("Increment");
    expect(incrementButton).toBeDefined();
  });
});
