<template>
  <Modal @close="$emit('close')">
    <template v-slot:header>
      <h2>Are you sure?</h2>
    </template>
    <template v-slot:body>
      <slot></slot>
    </template>

    <template v-slot:footer class="actions">
      <button class="btn-success" @click="cancel">Cancel</button>
      <button class="btn-danger" @click="confirm">Apply</button>
    </template>
  </Modal>
</template>

<script lang="ts">
import Vue from "vue";
import Modal from "./Modal.vue";

export default Vue.extend({
  props: {
    title: String
  },

  data: () => {
    return {};
  },

  methods: {
    confirm: function() {
      this.$emit("confirm");
    },
    cancel: function() {
      this.$emit("cancel");
    }
  },

  components: {
    Modal
  }
});
</script>

<style lang="scss" scoped>
.actions {
  margin-top: 2rem;
  border-top: var(--bg-secondary) 1px solid;
  padding-top: 0.8rem;
  padding-bottom: 2rem;

  button {
    border-radius: 15px;
    color: var(--text);
    font-size: 1rem;
    width: 30%;
  }

  button:nth-child(1) {
    float: left;
  }

  button:nth-child(2) {
    float: right;
  }
}
</style>
