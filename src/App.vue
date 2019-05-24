<template>
  <div id="app">
    <NavBar v-on:toggle-logged-in="toggleLoggedIn" :loggedIn="this.loggedIn"/>
    <v-layout column>
      <v-flex xs12>
        <Profile/>
      </v-flex>
      <v-flex xs12>
        <TweetsManager/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { NavBar, TweetsManager, Profile } from "./components";

export default {
  name: "App",
  components: {
    NavBar,
    Profile,
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

<style scoped>
</style>
