The internal v-form component makes it easy to add validation to form inputs. All input components have a rules prop which takes an array of functions. These functions allow you to specify conditions in which the field is valid or invalid. Whenever the value of an input is changed, each function in the array will receive the new value. If a function returns false or a string, validation has failed.

<template>
  <v-form v-model="valid">
    <v-container>
      <v-card class="text-xs-center pl-5 pr-5 pt-3 pb-5 mt-5 mr-5 ml-5" max-width="500">
        <v-layout column>
          <v-flex xs12 md4>
            <v-text-field v-model="username" :rules="nameRules" label="Username" required></v-text-field>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-flex>
          <v-flex xs12 md4>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              required
            ></v-text-field>
          </v-flex>
          <v-btn class="white--text" color="blue" @click="handleClick">Sign Up</v-btn>
        </v-layout>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    username: "",
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+\@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Password is required",
      v => /[0-9]/.test(v) || "Password must include numbers.",
      v =>
        /^.{8,32}$/.test(v) || "Password must be between 8 and 32 characters."
    ]
  }),
  methods:{
      handleClick(){
          if(this.valid){
            console.log("User created")
          } else {
            console.log("Invalid input")
          }
      }
  }
};
</script>


