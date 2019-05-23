<template>
  <v-layout>
    <v-text-field prepend-icon="account_circle" v-model="email" label="Email"></v-text-field>
    <v-text-field prepend-icon="lock" type="password" v-model="password" label="Password"></v-text-field>
    <v-btn @click="handleClick">Log In</v-btn>
  </v-layout>
</template>

<script>
import { signIn } from "../graphQL";
export default {
  props: ["loggedIn"],
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    handleClick() {
      signIn(this.email, this.password)
        .then(res => console.log(res))
        .catch(() => alert("Wrong user name or password."));
    }
  }
};
</script>



<style scoped>
.v-btn {
  border-radius: 60px;
  margin-bottom: 16px;
}
</style>