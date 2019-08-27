import CounterStore from "./Store/CounterStore";

describe("CounterStore testing", () => {
  it("should test increment counter with 0", () => {
    const counterStore = new CounterStore();
    counterStore.incrementCounter();
    expect(counterStore.counter).toBe(1);
  });
  it("should test decrement counter with 0", () => {
    const counterStore = new CounterStore();
    counterStore.decrementCounter();
    expect(counterStore.counter).toBe(-1);
  });
  it("should test reset counter to 0", () => {
    const counterStore = new CounterStore();
    counterStore.decrementCounter();
    counterStore.resetCounter();
    expect(counterStore.counter).toBe(0);
  });
});
