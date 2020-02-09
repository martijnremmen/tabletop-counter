<template>
  <div id="app">
    <button @click="addPlayer('John')">Add player</button>
    <playerComponent
      v-for="(player, index) in sharedState.players"
      :key="index"
      :index="index"
      :player="player"
    ></playerComponent>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { store, mutations } from "./store";
import playerComponent from "./components/Player.vue";

export default Vue.extend({
  name: "app",

  data: () => {
    return {
      sharedState: store
    };
  },

  components: {
    playerComponent
  },

  methods: {
    addPlayer: function(name: string, health: number = 20) {
      mutations.addPlayer(name, health);
    }
  }
});
</script>

<style lang="scss">
$material-icons-font-path: '~material-icons/iconfont/';

@import '~material-icons/iconfont/material-icons.scss';

:root {
  --bg-primary: rgb(29, 29, 29);
  --bg-secondary: rgb(48, 48, 48);
  --text: #ffffff;
  --text-green: #1bb346;
  --text-red: #b32d2d;
  --btn-primary: #F2E9CE;
  --btn-success: #1bb346;
  --btn-danger: #b32d2d;
  background-color: var(--bg-primary);
}

.btn-success {
  background-color: var(--btn-success);
}

.btn-danger {
  background-color: var(--btn-danger);
}

.btn-primary {
  background-color: var(--btn-primary);
  border: none;
  
}

button {
  border: none;
  padding: 1em;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin-top: 60px;
}
</style>
