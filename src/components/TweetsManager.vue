<template>
  <div>
    <NewTweet v-on:update-tweets="fetchUserTweets"/>
    <TweetsHeader/>
    <Tweet
      v-for="tweet in currentUserTweets"
      v-bind:key="tweet.id"
      :content="tweet.content"
      :createdAt="tweet.createdAt"
      :user="tweet.postedBy.username"
    />
  </div>
</template>
<script>
import { NewTweet, Tweet, TweetsHeader } from ".";
import { getUserTweets } from "../graphQL";
export default {
  components: {
    NewTweet,
    Tweet,
    TweetsHeader
  },
  props: ["currentUserTweets"],
  data: () => ({}),
  methods: {
    fetchUserTweets() {
      this.$emit("fetch-user-tweets");
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
