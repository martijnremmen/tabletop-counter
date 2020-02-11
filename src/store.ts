import Vue from "vue";
import {
  Player,
  createPlayer,
  addCounter,
  removeCounter,
  changeName
} from "./classes/Player";
import {
  Counter,
  createCounter,
  incrementCounter,
  decrementCounter,
  updateCounterType
} from "./classes/Counter";

export const store = Vue.observable({
  debug: false,
  players: [] as Player[]
});

export const mutations = {
  addPlayer(name: string, health: number = 20): void {
    // if (store.debug) {
    //   console.log(
    //     `Adding player ${name} with starting health ${health.toString()}`
    //   );
    // }
    store.players.push(createPlayer(name, health));
  },

  removePlayerByName(name: string): void {
    let filtered = store.players.filter((player, index) => {
      return player.name !== name;
    });
    store.players = filtered;
  },

  removePlayerById(id: number): void {
    // if (store.debug) {
    //   console.log(`Removing player with ID ${id.toString()}`);
    // }
    store.players.splice(id, 1);
  },

  addCounterToPlayer(player: Player, type: string, value: number): void {
    // if (store.debug) {
    //   console.log(
    //     `Adding a new counter with type ${type} and starting value of ${value.toString()} to player ${
    //       player.name
    //     }`
    //   );
    // }
    addCounter(player, type, value);
  },

  removeCounterFromPlayer(player: Player, index: number): void {
    // if (store.debug) {
    //   console.log(
    //     `Removing counter id ${index.toString()} from player ${player.name}`
    //   );
    // }
    removeCounter(player, index);
  },

  incrementCounterFromPlayer(counter: Counter, value: number): void {
    // if (store.debug) {
    //   console.log(`Incrementing counter ${counter.type} with ${value}`);
    // }
    incrementCounter(counter, value);
  },

  decrementCounterFromPlayer(counter: Counter, value: number): void {
    // if (store.debug) {
    //   console.log(`Decrementing counter ${counter.type} with ${value}`);
    // }
    decrementCounter(counter, value);
  },

  updateCounterType(counter: Counter, type: string) {
    updateCounterType(counter, type);
  },

  updatePlayerName(player: Player, name: string): void {
    // if (store.debug) {
    //   console.log(`Changing ${player.name}'s name to ${name.toString()}`);
    // }
    changeName(player, name);
  }
};
