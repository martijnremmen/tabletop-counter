<template>
  <div class="players">
    <div class="controlbar">
      <inputModalComponent
        v-if="showPlayerNameModel"
        @close="showPlayerNameModel = false"
        @submitModal="changeName"
        ><p>
          You are editing <strong>{{ player.name }}'s</strong> name.
        </p></inputModalComponent
      >
      <h1 @click="showPlayerNameModel = true">
        {{ player.name }} <i class="material-icons">edit</i>
      </h1>
      <confirmModalComponent
        v-if="showPlayerRemoveModal"
        @close="showPlayerRemoveModal = false"
        @confirm="removePlayer"
        @cancel="showPlayerRemoveModal = false"
        >This action will <strong>permanently</strong> delete player
        {{ player.name }}</confirmModalComponent
      >
      <button class="material-icons" @click="showPlayerRemoveModal = true">
        remove_circle
      </button>
    </div>
    <div class="counters">
      <counterComponent
        v-for="(counter, index) in player.counters"
        :key="index"
        :counter="counter"
        :index="index"
        :player="player"
      ></counterComponent>
      <button class="material-icons" @click="addCounter()">add</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Player } from "../classes/Player";
import { Counter } from "../classes/Counter";
import { mutations } from "../store";
import counterComponent from "./Counter.vue";
import inputModalComponent from "./inputModal.vue";
import confirmModalComponent from "./ConfirmModal.vue";

export default Vue.extend({
  props: {
    player: { type: Object as () => Player },
    index: Number
  },

  data: () => {
    return {
      showPlayerNameModel: false,
      showPlayerRemoveModal: false
    };
  },

  components: {
    counterComponent,
    inputModalComponent,
    confirmModalComponent
  },

  methods: {
    addCounter: function(type: string = "Counter", value: number = 0): void {
      mutations.addCounterToPlayer(this.player, type, value);
    },
    removePlayer: function(): void {
      this.showPlayerRemoveModal = false;
      mutations.removePlayerById(this.index);
    },
    changeName: function(name: string): void {
      mutations.updatePlayerName(this.player, name);
      this.showPlayerNameModel = false;
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
  padding-bottom: 1rem;

  button {
    background-color: var(--bg-secondary);
    color: var(--btn-success);
    padding: 1rem;
    height: 50%;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 3rem;
    border-radius: 50%;
  }

  & * {
    margin-right: 2em;
  }

  & div:last-child {
    margin-right: 0;
  }
}

.players {
  margin-bottom: 3em;
}

.controlbar {
  padding: 1em;
  text-align: left;

  button {
    color: var(--btn-danger);
    background-color: transparent;
    font-size: 2rem;
    padding: 0.3em;
    float: right;
    cursor: pointer;
    transition: color;
    transition-timing-function: ease-in-out;
    transition-duration: 100ms;

    &:hover,
    :active {
      color: rgba(var(--btn-danger), 0.5);
    }
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
