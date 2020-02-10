<template>
  <div class="players">
    <div class="controlbar">
      <playernamemodalComponent
        v-if="showModal"
        @close="showModal = false"
        :player="player"
        :newName="newName"
        @submitModal="changeName"
      ></playernamemodalComponent>
      <h1 @click="showModal = true">
        {{ player.name }} <i class="material-icons">edit</i>
      </h1>
      <button class="btn-success" @click="addCounter()">
        <i class="material-icons">add</i> Add counter
      </button>
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
import playernamemodalComponent from "./PlayerNameModal.vue";

export default Vue.extend({
  props: {
    player: { type: Object as () => Player },
    index: Number
  },

  data: () => {
    return {
      showModal: false
    };
  },

  components: {
    counterComponent,
    playernamemodalComponent
  },

  methods: {
    addCounter: function(type: string = "Counter", value: number = 0): void {
      mutations.addCounterToPlayer(this.player, type, value);
    },
    removePlayer: function(): void {
      mutations.removePlayerById(this.index);
    },
    changeName: function(name: string): void {
      mutations.updatePlayerName(this.player, name);
      this.showModal = false;
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
    margin-right: 0;
  }
}

.controlbar {
  padding: 1em;
  text-align: left;
  margin-top: 3rem;

  button {
    border-radius: 20px;
    padding: 0.5em;
    float: right;
  }

  h1 {
    font-size: 3em;
    display: inline-block;
    cursor: pointer;
    border-radius: 15px;
    padding: 0.4rem;
    margin: 0;

    &:hover {
      background-color: var(--text);
      color: var(--bg-darker);
    }

    i {
      vertical-align: top;
    }
  }
}
</style>
