export {
  Counter,
  createCounter,
  incrementCounter,
  decrementCounter,
  updateCounterType
};

interface Counter {
  type: string;
  value: number;
  history: number[];
}

function createCounter(type: string, value: number): Counter {
  return {
    type: type,
    value: value,
    history: []
  };
}

function incrementCounter(counter: Counter, value: number = 1): void {
  counter.value = counter.value + value;
  counter.history.push(value);
}

function decrementCounter(counter: Counter, value: number = 1): void {
  counter.value = counter.value - value;
  counter.history.push(-value);
}

function updateCounterType(counter: Counter, type: string): void {
  counter.type = type;
}
