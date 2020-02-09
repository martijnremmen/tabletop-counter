<template>
  <div class="counter">
    <div class="controls">
      <button class="btn-success material-icons" @click="incbutton()">add</button>
      <button class="btn-danger material-icons" @click="decbutton()">remove</button>
    </div>
    <div class="display">
      <div class="titlebar">
        <h3 class="type">{{ counter.type }}</h3>
        <button class="material-icons" @click="removeCounter()">remove_circle</button>
      </div>

      <template v-if="editMode">
        <p class="value">{{ editValue }}</p>
        <div class="confirmbar">
          <button class="btn-success" @click="applyChanges()">Ok</button>
          <button class="btn-danger" @click="disregardChanges()">Cancel</button>
        </div>
      </template>
      <template v-else>
        <p class="value">{{ counter.value }}</p>
        <historyComponent :history="counter.history"></historyComponent>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Counter } from "../classes/Counter";
import { Player } from "../classes/Player";
import { mutations } from "../store";
import historyComponent from "./History.vue";

export default Vue.extend({
  props: {
    counter: { type: Object as () => Counter },
    index: Number,
    player: { type: Object as () => Player }
  },

  data: () => {
    return {
      editMode: false,
      editValue: 0
    };
  },

  components: {
    historyComponent
  },

  methods: {
    incbutton(): void {
      this.editMode = true;
      this.editValue++;
    },
    decbutton(): void {
      this.editMode = true;
      this.editValue--;
    },
    applyChanges(): void {
      this.increment(this.editValue);
      this.editMode = false;
      this.editValue = 0;
    },
    disregardChanges(): void {
      this.editMode = false;
      this.editValue = 0;
    },
    increment(value: number): void {
      mutations.incrementCounterFromPlayer(this.counter, value);
    },
    decrement(value: number): void {
      mutations.decrementCounterFromPlayer(this.counter, value);
    },
    removeCounter(): void {
      mutations.removeCounterFromPlayer(this.player, this.index);
    }
  },

  computed: {}
});
</script>

<style lang="scss" scoped>
.counter {
  padding: 0.7em;
  max-width: 15em;
  min-width: 10em;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background-color: var(--bg-secondary);

  .controls {
    width: (100% / 3);
    display: inline-block;
    border-radius: 13px;
    overflow: hidden;
    height: 100%;
    font-size: 1em;

    .btn-primary {
      background-color: var(--btn-primary);
    }

    button {
      width: 100%;
      border: none;
      font-size: 1.3em;
      padding: 0.3em;
      height: 50%;
      font-size: 2em;
    }
  }

  .display {
    width: (100% / 3 * 2);
    display: inline-block;
    height: 100%;
    margin: 0;

    .confirmbar {
      border-radius: 10px;
      overflow: hidden;

      button {
        width: 50%;
        height: 100%;
        border: none;
        padding: 0.3em;
        color: var(--text);
      }
    }

    .type {
      margin: 0em 0.2em;
    }

    .value {
      font-size: 3.2em;
      margin: auto auto;
    }

    .titlebar {

      h3 {
        width: 80%;
        margin: 0;
      }

      button {
        border: none;
        padding: 0;
        width: 20%;
        background: none;
        color: var(--btn-danger);
        float: right;
        cursor: pointer;
      }

      * {
        display: inline-block;
      }
    }
  }
}
</style>
