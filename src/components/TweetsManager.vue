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
  data: () => ({
    currentUserTweets: []
  }),
  methods: {
    fetchUserTweets() {
      getUserTweets()
        .then(res => {
          console.log(res.headers);
          this.currentUserTweets = res.data.data.currentUserTweets.reverse();
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchUserTweets();
  }
};
</script>
<style scoped>
</style>
