<template>
  <v-toolbar color="blue">
    <v-layout row justify-end>
      <v-flex shrink>
        <LogInView v-on:toggle-logged-in="toggleLoggedIn" v-if="!this.loggedIn"/>
        <LogOutView v-if="this.loggedIn"/>
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
      this.$emit("toggle-logged-in", true);
    }
  }
};
</script>



<style scoped>
</style>