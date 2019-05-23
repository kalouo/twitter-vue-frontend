<template>
  <div id="app">
    <NavBar :loggedIn="this.loggedIn"/>
    <v-flex row>
      <TweetsManager/>
    </v-flex>
  </div>
</template>

<script>
import { NavBar, TweetsManager } from "./components";

export default {
  name: "App",
  components: {
    NavBar,
    TweetsManager
  },
  data: () => ({
    loggedIn: false
  }),
  methods: {
    toggleLoggedIn(bool) {
      this.loggedIn = bool;
    }
  }
};
</script>

<style>
</style>
