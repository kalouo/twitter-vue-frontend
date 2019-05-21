<template>
  <div id="app">
    <NavBar/>
    <SignUp/>
  </div>
</template>

<script>
import SignUp from "./components/signUp.vue";
import NavBar from "./components/navBar.vue";

export default {
  name: "app",
  components: {
    SignUp,
    NavBar
  }
};
</script>

<style>
</style>
