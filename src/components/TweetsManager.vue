<template>
  <div>
    <NewTweet/>
    <TweetsHeader/>
    <Tweet/>
    <Tweet/>
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
  data: () => ({}),
  methods: {},
  mounted() {
    getUserTweets()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
</style>
