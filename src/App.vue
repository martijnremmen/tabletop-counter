<template>
  <div id="app">
    <playerComponent
      v-for="(player, index) in sharedState.players"
      :key="index"
      :index="index"
      :player="player"
    ></playerComponent>
    <h1 class="addplayerbutton" @click="addPlayer()">
      Add player <i class="material-icons">add</i>
    </h1>
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
      if (name) {
        mutations.addPlayer(name, health);
      } else {
        mutations.addPlayer(
          "Player " + this.sharedState.players.length.toString(),
          health
        );
      }
    }
  }
});
</script>

<style lang="scss">
$material-icons-font-path: "~material-icons/iconfont/";

@import "~material-icons/iconfont/material-icons.scss";

:root {
  --bg-primary: rgb(29, 29, 29);
  --bg-secondary: rgb(48, 48, 48);
  --bg-darker: rgb(20, 20, 20);
  --text: #ffffff;
  --text-green: #1bb346;
  --text-red: #b32d2d;
  --btn-primary: #f2e9ce;
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
  cursor: pointer;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--text);
  margin-top: 60px;
}

.addplayerbutton {
  margin-left: 2em;
  font-size: 3em;
  display: inline-block;
  cursor: pointer;
  border-radius: 15px;
  padding: 0.4rem;
  margin: 0;
  text-align: left;
  transition: color background-color;
  transition-duration: 100ms;
  transition-timing-function: ease-in-out;

  &:hover,
  :active {
    background-color: var(--text);
    color: var(--bg-darker);
  }

  i {
    vertical-align: top;
  }
}
</style>
