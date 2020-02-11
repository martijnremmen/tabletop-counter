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

        <div class="modalfooter">
          <slot name="footer"></slot>
        </div>
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
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.5);
  top: 0;
  left: 0;
  z-index: 100;
}

.modal {
  width: max-content;
  min-width: 20rem;
  max-width: 90%;
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
      max-width: 80%;
    }

    button {
      float: right;
      background-color: transparent;
      color: var(--text-red);
      font-size: 2.6rem;
      padding: 0.7rem;
      max-width: 20%;
    }
  }

  .modalfooter {
    margin-top: 2rem;
    border-top: var(--bg-secondary) 1px solid;
    padding-top: 0.8rem;
    padding-bottom: 2rem;

    button {
      border-radius: 15px;
      color: var(--text);
      font-size: 1rem;
      width: 30%;
      min-width: max-content;
    }

    button:nth-child(1) {
      float: left;
    }

    button:nth-child(2) {
      float: right;
    }
  }
}
</style>
