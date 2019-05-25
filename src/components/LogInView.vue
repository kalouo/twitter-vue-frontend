<template>
  <v-layout>
    <v-text-field prepend-icon="account_circle" v-model="email" label="Email"></v-text-field>
    <v-text-field prepend-icon="lock" type="password" v-model="password" label="Password"></v-text-field>
    <v-btn class="mt-2" @click="handleClick">Log In</v-btn>
  </v-layout>
</template>

<script>
import { signIn } from "../graphQL";
export default {
  name: "LogInView",
  props: [],
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    handleClick() {
      signIn(this.email, this.password)
        .then(res => {
          console.log(res);
          this.$emit("toggle-logged-in", true);
        })
        .catch(() => alert("Wrong user name or password."));
    }
  }
};
</script>



<style scoped>
.v-btn {
  border-radius: 60px;
}
</style>