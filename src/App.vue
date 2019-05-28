<template>
  <div id="app">
    <NavBar v-on:toggle-logged-in="toggleLoggedIn" :loggedIn="this.loggedIn"/>
    <SignUp v-if="!loggedIn"/>
    <v-layout v-if="loggedIn" column>
      <v-flex xs12>
        <Profile :bio="this.currentUser.bio"/>
      </v-flex>
      <v-flex xs12>
        <TweetsManager
          :currentUserTweets="this.currentUserTweets"
          v-on:fetch-user-tweets="fetchUserTweets"
        />
      </v-flex>
    </v-layout>
  </div>
</template>



<script>
import { NavBar, TweetsManager, Profile, SignUp } from "./components";
import { getCurrentUser, getUserTweets } from "./graphQL";
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
    currentUser: {},
    currentUserTweets: []
  }),
  methods: {
    toggleLoggedIn(bool) {
      if (bool) {
        this.getCurrentUserInfo()
          .then(() => this.fetchUserTweets())
          .then(() => {
            this.loggedIn = bool;
          });
      } else if (!bool) {
        this.loggedIn = bool;
        this.currentUser = {};
        this.currentUserTweets = [];
      }
    },
    async getCurrentUserInfo() {
      getCurrentUser()
        .then(res => {
          this.currentUser = res.data.data.getCurrentUser;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async fetchUserTweets() {
      getUserTweets()
        .then(res => {
          this.currentUserTweets = res.data.data.currentUserTweets.reverse();
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    if (localStorage.getItem("Authorization")) this.toggleLoggedIn(true);
  }
};
</script>

<style scoped>
</style>

