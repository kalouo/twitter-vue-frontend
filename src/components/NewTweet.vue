<template>
  <v-form v-model="valid">
    <v-flex xs12 sm6 offset-sm3 class="mt-5 text-xs-right">
      <v-textarea
        outline
        name="input-7-4"
        counter="140"
        clearable
        height="80px"
        :rules="lengthRules"
        required
        v-model="tweet"
      ></v-textarea>
      <v-btn class="white--text mr-0" color="blue" @click="handleClick">Share</v-btn>
    </v-flex>
  </v-form>
</template>
<script>
import { createTweet } from "../graphQL";
export default {
  components: {},
  data: () => ({
    tweet: "",
    valid: false,
    lengthRules: [
      v => v.length <= 140 || "Tweet must be 140 characters or less."
    ]
  }),
  methods: {
    updateTweets() {
      this.$emit("update-tweets");
    },
    handleClick() {
      createTweet(this.tweet)
        .then(() => {
          this.updateTweets();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped>
</style>
