<template>
  <Modal @close="closeModal">
    <template v-slot:header>
      <h2>Edit name</h2>
    </template>

    <template v-slot:body>
      <slot></slot>
      <label for="newname">New name:</label>
      <input
        type="text"
        placeholder="name"
        id="newname"
        v-model="newName"
        @keyup.enter="submitModal"
      />
    </template>

    <template v-slot:footer>
      <button class="btn-success" @click="closeModal()">Cancel</button>
      <button class="btn-danger" @click="submitModal()">Apply</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import Vue from "vue";
import { Player } from "../classes/Player";
import Modal from "./Modal.vue";

export default Vue.extend({
  props: {},

  data: () => {
    return {
      newName: "" as string
    };
  },

  methods: {
    submitModal: function() {
      this.$emit("submitModal", this.newName);
    },
    closeModal: function() {
      this.$emit("close");
    }
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
  display: block;
  width: 90%;
}

::placeholder {
  font-size: 1.2em;
  color: var(--text);
}
</style>
