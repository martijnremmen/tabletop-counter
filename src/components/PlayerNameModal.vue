<template>
  <Modal @close="$emit('close')">
    <template v-slot:header>
      <h2>Change player name</h2>
    </template>
    <template v-slot:body>
      <p>What name would you like to give to {{ player.name }}?</p>
      <label for="playername">New name</label>
      <input type="text" placeholder="Name" id="playername" v-model="newName" />
      <button class="btn-primary" @click="$emit('submitModal', newName)">
        Submit
      </button>
    </template>
  </Modal>
</template>

<script lang="ts">
import Vue from "vue";
import { Player } from "../classes/Player";
import Modal from "./Modal.vue";

export default Vue.extend({
  props: {
    player: { type: Object as () => Player }
  },

  data: () => {
    return {
      newName: "" as string
    };
  },

  components: {
    Modal
  }
});
</script>

<style lang="scss" scoped>
input {
  padding: 1em;
  border: var(--bg-secondary);
  background-color: var(--bg-darker);
  border-radius: 15px;
  color: var(--text);
}

::placeholder {
  font-size: 1.2em;
  color: var(--text);
}
</style>
