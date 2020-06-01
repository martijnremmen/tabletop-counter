<template>
  <div class="history">
    <small
      v-for="(change, index) in getLast"
      :key="index"
      :class="[{ first: index == 0 }, { negative: change < 0 }]"
      >{{ change }}</small
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    history: { type: Array as () => String[] }
  },

  computed: {
    getLast(): String[] {
      return this.history.slice(Math.max(this.history.length - 4, 0)).reverse();
    }
  }
});
</script>

<style lang="scss" scoped>
.history {
  height: 2em;
  text-align: left;
  color: var(--text-green);
  font-weight: bold;
  display: block;
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;

  .first {
    font-size: 1.3em;
  }

  .negative {
    color: var(--text-red);
  }

  small {
    display: inline-block;
    padding: 0em 0em 0em 0.4rem;
  }
}
</style>
