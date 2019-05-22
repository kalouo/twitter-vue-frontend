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
import {} from "../graphQL";
export default {
  components: {
    NewTweet,
    Tweet,
    TweetsHeader
  },
  data: () => ({}),
  methods: {}
};
</script>
<style scoped>
</style>
