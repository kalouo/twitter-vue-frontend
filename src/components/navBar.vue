<template>
  <v-toolbar color="blue">
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-text-field prepend-icon="account_circle" v-model="email" label="Email"></v-text-field>
      <v-text-field prepend-icon="lock" type="password" v-model="password" label="Password"></v-text-field>
    </v-toolbar-items>
    <v-btn @click="handleClick">Log In</v-btn>
  </v-toolbar>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    email: "",
    password: ""
  }),
  methods: {
    handleClick() {
      console.log(this.email, this.password);
      axios
        .post("/auth/login", {
          email: this.email,
          password: this.password
        })
        .then(res => console.log(res.data.token))
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