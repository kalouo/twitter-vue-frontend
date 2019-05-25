<template>
  <div id="app">
    <NavBar v-on:toggle-logged-in="toggleLoggedIn" :loggedIn="this.loggedIn"/>
    <SignUp/>

    <!-- <v-layout column>
      <v-flex xs12>
        <Profile :bio="this.currentUser.bio"/>
      </v-flex>
      <v-flex xs12>
        <TweetsManager/>
      </v-flex>
    </v-layout>-->
  </div>
</template>



<script>
import { NavBar, TweetsManager, Profile, SignUp } from "./components";
import { getCurrentUser } from "./graphQL";
export default {
  name: "App",
  components: {
    SignUp,
    NavBar,
    Profile,
    TweetsManager
  },
  data: () => ({
    loggedIn: false,
    currentUser: { bio: "" }
  }),
  methods: {
    toggleLoggedIn(bool) {
      this.loggedIn = bool;
    },
    getCurrentUserInfo() {
      getCurrentUser()
        .then(res => {
          console.log(res);
          this.currentUser = res.data.data.getCurrentUser;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    if (localStorage.getItem("Authorization")) this.loggedIn = true;
    console.log(this.loggedIn);
    this.getCurrentUserInfo();
  }
};
</script>

<style scoped>
</style>

