<template>
  <div>
    <!-- <v-flex class="pl-5 pt-5">
      <img class="ml-5" src="../assets/avatar.jpg" height="200px" width="200px">
    </v-flex>-->
    <v-flex xs12 sm6 offset-sm3 class="mt-5 text-xs-right">
      <v-layout row>
        <img class="mr-5 mt-1" src="../assets/avatar.jpg" height="130px" width="130px">
        <v-textarea
          :disabled="editButtonBool"
          outline
          name="input-7-4"
          label="Bio"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
        <v-btn class="white--text mt-0" color="green" @click="handleClick">{{editButton}}</v-btn>
      </v-layout>
    </v-flex>
  </div>
</template>
<script>
export default {
  components: {},
  data: () => ({
    editButtonBool: true,
    editButton: "Edit"
  }),
  methods: {
    handleClick() {
      this.toggleEditButtonStatus();
    },
    toggleEditButtonStatus() {
      this.editButtonBool = !this.editButtonBool;
      this.editButton = this.editButton === "Edit" ? "Save" : "Edit";
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>
