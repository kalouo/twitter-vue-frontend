<template>
  <v-layout>
    <v-btn @click="handleClick">Sign Out</v-btn>
  </v-layout>
</template>

<script>
import {} from "../graphQL";
export default {
  name: "LogOut",
  props: [],
  data: () => ({}),
  methods: {
    handleClick() {
      localStorage.removeItem("Authorization");
      this.$emit("toggle-logged-in");
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