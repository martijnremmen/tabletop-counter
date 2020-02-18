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
  history: string[];
}

function createCounter(type: string, value: number): Counter {
  return {
    type: type,
    value: value,
    history: []
  };
}

function addHistory(counter: Counter, value: number): void {
  let item = ""
  if (value > 0) {
    item = '+' + value.toString()
  } else {
    item = value.toString()
  }
  counter.history.push(item)
}

function incrementCounter(counter: Counter, value: number = 1): void {
  counter.value = counter.value + value;
  addHistory(counter, value);
}

function decrementCounter(counter: Counter, value: number = 1): void {
  counter.value = counter.value - value;
  addHistory(counter, value);
}

function updateCounterType(counter: Counter, type: string): void {
  counter.type = type;
}
