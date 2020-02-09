<template>
  <div class="history">
    <small v-for="(change, index) in getLastFive" :key="index">{{
      change
    }}</small>
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
      return this.history.slice(Math.max(this.history.length - 5, 0));
    }
  }
});
</script>

<style lang="scss" scoped>
.history {
  max-width: 100%;
  height: 100%;

  small {
    padding: 0.2em;
  }
}
</style>
