<template>
  <div id="app">
    <NavBar/>
    <v-flex row>
      <TweetsManager/>
    </v-flex>
  </div>
</template>

<script>
import { SignUp, NavBar, TweetsManager } from "./components";

export default {
  name: "App",
  components: {
    SignUp,
    NavBar,
    TweetsManager
  }
};
</script>

<style>
</style>
