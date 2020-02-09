<template>
  <div class="history">
    <small
      v-for="(change, index) in getLastFive"
      :key="index"
      :class="index == 0 ? 'first' : ''"
      >{{ change }}</small
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    history: { type: Array as () => Number[] }
  },

  computed: {
    getLastFive(): Number[] {
      return this.history.slice(Math.max(this.history.length - 5, 0)).reverse();
    }
  }
});
</script>

<style lang="scss" scoped>
.history {
  max-width: 100%;
  height: 2em;
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;

  .first {
    font-size: 1.3rem;
  }

  small {
    padding: 0.2em;
  }
}
</style>
