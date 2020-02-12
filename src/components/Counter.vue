<template>
  <div class="counter">
    <div class="controls">
      <button class="btn-success material-icons" @click="incbutton()">
        add
      </button>
      <button class="btn-danger material-icons" @click="decbutton()">
        remove
      </button>
    </div>
    <div class="display">
      <div class="titlebar">
        <h3 class="type" @click="showRenameModal = true">{{ counter.type }}</h3>
        <inputModalComponent
          v-if="showRenameModal"
          @close="showRenameModal = false"
          @submitModal="renameCounter"
          ><p>
            You are editing the counter
            <strong>"{{ counter.type }}"</strong> from player
            <strong>"{{ player.name }}"</strong>.
          </p>
          <br
        /></inputModalComponent>

        <button class="material-icons" @click="showDeleteConfirmModal = true">
          remove_circle
        </button>
        <confirmModalComponent
          v-if="showDeleteConfirmModal"
          @close="showDeleteConfirmModal = false"
          @confirm="removeCounter"
          @cancel="showDeleteConfirmModal = false"
          >This action will <strong>permanently</strong> delete counter
          <strong>"{{ counter.type }}"</strong> from player
          <strong>"{{ player.name }}"</strong>
        </confirmModalComponent>
      </div>

      <template v-if="editMode">
        <p class="value">{{ editValue }}</p>
        <div class="confirmbar">
          <button class="btn-danger" @click="applyChanges()">Ok</button>
          <button class="btn-success" @click="disregardChanges()">
            Cancel
          </button>
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
import confirmModalComponent from "./ConfirmModal.vue";
import inputModalComponent from "./inputModal.vue";

export default Vue.extend({
  props: {
    counter: { type: Object as () => Counter },
    index: Number,
    player: { type: Object as () => Player }
  },

  data: () => {
    return {
      editMode: false,
      editValue: 0,
      showDeleteConfirmModal: false,
      showRenameModal: false
    };
  },

  components: {
    historyComponent,
    confirmModalComponent,
    inputModalComponent
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
      this.showDeleteConfirmModal = false;
    },
    renameCounter(name: string): void {
      mutations.updateCounterType(this.counter, name);
      this.showRenameModal = false;
    }
  },

  computed: {}
});
</script>

<style lang="scss" scoped>
.counter {
  text-align: center;
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
    border-radius: 15px;
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
      color: var(--text);
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
      height: 2em;
      width: 90%;
      margin: auto;

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
      height: 1.5em;

      h3 {
        width: 80%;
        margin: 0;
        cursor: pointer;
        border-radius: 15px;

        &:hover {
          background-color: var(--text);
          color: var(--bg-secondary);
        }
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
