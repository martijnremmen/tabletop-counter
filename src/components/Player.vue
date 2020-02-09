<template>
  <div class="players">
    <div class="controlbar">
      <h1>{{ player.name }}</h1>
      <button class="btn-success" @click="addCounter()"> <i class="material-icons">add</i> Add counter</button>
      <button class="btn-danger" @click="removePlayer()">Remove player</button>
    </div>
    <div class="counters">
      <counterComponent
        v-for="(counter, index) in player.counters"
        :key="index"
        :counter="counter"
        :index="index"
        :player="player"
      ></counterComponent>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Player } from "../classes/Player";
import { Counter } from "../classes/Counter";
import { mutations } from "../store";
import counterComponent from "./Counter.vue";

export default Vue.extend({
  props: {
    player: { type: Object as () => Player },
    index: Number
  },

  components: {
    counterComponent
  },

  methods: {
    addCounter: function(type: string = "Counter", value: number = 0): void {
      mutations.addCounterToPlayer(this.player, type, value);
    },
    removePlayer: function(): void {
      mutations.removePlayerById(this.index);
    }
  }
});
</script>

<style lang="scss" scoped>
.counters {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  & * {
    margin-right: 2em;
  }

  & div:last-child {
    margin-right: 0
  }
}

.controlbar {
  padding: 1em;

  button {
    border-radius: 20px;
    padding: 0.5em;

  }

  h1 {
    font-size: 3em;
    text-align: left;
    display: inline-block;
    margin-right: auto;
  }
}
</style>
