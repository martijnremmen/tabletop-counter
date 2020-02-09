import { Counter, createCounter } from "./Counter";

export { Player, createPlayer, addCounter, removeCounter, changeName };

interface Player {
  name: string;
  counters: Counter[];
}

function createPlayer(name: string, health: number): Player {
  return {
    name: name,
    counters: [createCounter("health", health)]
  };
}

function addCounter(player: Player, type: string, value: number): void {
  player.counters.push(createCounter(type, value));
}

function removeCounter(player: Player, index: number): void {
  player.counters.splice(index, 1);
}

function changeName(player: Player, name: string): void {
  player.name = name.toString();
}
