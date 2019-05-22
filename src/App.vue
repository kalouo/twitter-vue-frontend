<template>
  <div id="app">
    <NavBar/>
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
  }
};
</script>

<style>
</style>
