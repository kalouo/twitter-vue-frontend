<template>
  <v-toolbar color="blue">
    <v-spacer></v-spacer>
    <v-layout row justify-end>
      <v-flex shrink>
        <logIn/>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import { signIn } from "../graphQL";
import { logIn } from "./";
export default {
  props: ["loggedIn"],
  components: { logIn },
  data: () => ({}),
  methods: {}
};
</script>



<style scoped>
.v-btn {
  border-radius: 60px;
  margin-bottom: 16px;
}
</style>