<template>
  <div>
    <!-- <v-flex class="pl-5 pt-5">
      <img class="ml-5" src="../assets/avatar.jpg" height="200px" width="200px">
    </v-flex>-->
    <v-flex xs12 sm6 offset-sm3 class="mt-5 text-xs-right">
      <v-layout row>
        <img class="mr-5 mt-1" src="../assets/avatar.jpg" height="130px" width="130px">
        <v-textarea :disabled="editingLocked" outline name="input-7-4" label="Bio" v-model="bio"></v-textarea>
        <v-btn class="white--text mt-0" color="green" @click="handleClick">{{editButton}}</v-btn>
      </v-layout>
    </v-flex>
  </div>
</template>
<script>
import { updateBio } from "../graphQL";
export default {
  components: {},
  props: ["bio"],
  data: () => ({
    editingLocked: true,
    editButton: "Edit"
  }),
  methods: {
    handleClick() {
      if (this.editingLocked) {
        this.toggleEditButtonStatus();
      } else {
        //NOTE PROBLEM REGARDING DIRECT MUTATION OF PROP
        updateBio(this.bio)
          .then(res => {
            this.toggleEditButtonStatus();
          })
          .catch(err => console.log(err));
      }
    },
    toggleEditButtonStatus() {
      this.editingLocked = !this.editingLocked;
      this.editButton = this.editButton === "Edit" ? "Save" : "Edit";
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
