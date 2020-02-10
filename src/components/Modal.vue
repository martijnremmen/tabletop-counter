<template>
  <div class="modalmask">
    <div class="modal">
      <div class="modalheader">
        <div class="costumheader">
          <slot name="header">Modal header</slot>
        </div>

        <button class="material-icons" @click="$emit('close')">close</button>
      </div>
      <div class="modalbody">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.modalmask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  top: 0;
  left: 0;
  z-index: 100;
}

.modal {
  width: 90%;
  max-width: 40rem;
  margin: 10% auto auto auto;
  background-color: var(--bg-primary);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 0px 50px black;
  z-index: 120;

  .modalbody {
    padding: 2em;
  }

  .modalheader {
    background-color: var(--bg-secondary);
    padding-left: 2em;

    & * {
      display: inline-block;
    }

    .costumheader {
      width: (100% / 5 * 4);
    }

    button {
      float: right;
      background-color: transparent;
      color: var(--text-red);
      font-size: 2.6rem;
      padding: 0.7rem;
    }
  }
}
</style>
