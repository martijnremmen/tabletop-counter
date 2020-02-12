import { Counter } from "./Counter";

export { Player, createPlayer, addCounter, removeCounter, changeName };

interface Player {
  name: string;
  counters: Counter[];
}

function createPlayer(name: string, counter?: Counter): Player {
  return {
    name: name,
    counters: counter ? [counter] : []
  };
}

function addCounter(player: Player, counter: Counter): void {
  player.counters.push(counter);
}

function removeCounter(player: Player, index: number): void {
  player.counters.splice(index, 1);
}

function changeName(player: Player, name: string): void {
  player.name = name.toString();
}
