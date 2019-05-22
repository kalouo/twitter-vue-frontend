<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <v-layout>
              <img src="../assets/logo.png" height="40px" width="40px">
              <v-layout class="ml-5" column>
                <div class="headline mb-0">{{this.user}}</div>
                <div class="mb-1">
                  {{moment(this.createdAt)
                  }}
                </div>
                <div>{{this.content}}</div>
              </v-layout>
            </v-layout>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import {} from "../graphQL";
import moment from "moment";
export default {
  props: ["content", "createdAt", "user"],
  data: () => ({}),
  methods: {
    moment: function(input) {
      const time = new Date(input).getTime();
      return moment(time).fromNow();
    }
  }
};
</script>
<style scoped>
</style>
