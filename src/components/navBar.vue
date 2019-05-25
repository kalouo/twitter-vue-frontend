<template>
  <v-toolbar color="blue">
    <v-layout row justify-end>
      <v-flex shrink>
        <LogInView v-on:toggle-logged-in="toggleLoggedIn(true)" v-if="!this.loggedIn"/>
        <LogOutView v-on:toggle-logged-in="toggleLoggedIn(false)" v-if="this.loggedIn"/>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import {} from "../graphQL";
import LogInView from "./LogInView";
import LogOutView from "./LogOutView";
export default {
  name: "NavBar",
  components: { LogInView, LogOutView },
  props: ["loggedIn"],
  data: () => ({}),
  methods: {
    toggleLoggedIn(bool) {
      this.$emit("toggle-logged-in", bool);
    }
  }
};
</script>



<style scoped>
</style>