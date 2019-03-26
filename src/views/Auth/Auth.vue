<template>
  <v-layout class="auth-background" align-center justify-center column fill-height>
    <material-card style="width: 330px">
      <v-avatar slot="offset" class="mx-auto d-block" size="130">
        <img src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg">
      </v-avatar>
      <h1
        class="center kh-muol-light title"
        style="padding: 20px 0 15px 0"
      >មន្ទីរសាធារណការ និងដឹកជញ្ជូន
        <br>ខេត្តបន្ទាយមានជ័យ
      </h1>
      <v-form ref="form">
        <v-text-field
          clearable
          clear-icon="mdi-close-circle"
          validate-on-blur
          prepend-icon="mdi-account"
          v-model="formData.username"
          :rules="rule.username"
          label="Username"
          required
        ></v-text-field>
        <v-text-field
          clearable
          clear-icon="mdi-close-circle"
          validate-on-blur
          prepend-icon="mdi-lock"
          type="password"
          browser-autocomplete
          current-password
          v-model="formData.password"
          :rules="rule.password"
          label="Password"
          required
        ></v-text-field>
      </v-form>

      <div class="center">
        <v-btn block @click="submitForm" color="success" round class="font-weight-light">Sign In</v-btn>
      </div>

      <div class="center">Sign In with social media</div>
      <div class="center">
        <v-btn icon dark small color="info">
          <v-icon dark>mdi-facebook</v-icon>
        </v-btn>-
        <v-btn icon dark small color="danger">
          <v-icon dark>mdi-google</v-icon>
        </v-btn>
      </div>
    </material-card>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
const user = { name: "admin", password: "123456" };
export default {
  data: () => ({
    valid: false,
    formData: {
      username: "admin",
      password: "1234567"
    },
    rule: {
      username: [v => !!v || "Username is required"],
      password: [v => !!v || "Password is required"]
    }
  }),
  methods: {
    ...mapActions(["updateUser", "app/showNotification"]),
    submitForm() {
      const { username, password } = this.formData;
      if (this.$refs.form.validate()) {
        if (user.name === username && user.password === password) {
          this.updateUser({ username, password });


          
        } else {
          this["app/showNotification"]({
            isVisible: true,
            icon: "mdi-close-circle",
            right: false,
            left: false,
            bottom: true,
            top: false,
            color: "red",
            text: "incorrect username or password"
          });
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
.auth-background {
  /* background-color: #fbfbfb; */
  /* backgrssound: url("../../assets/images/background.png") center center no-repeat
    fixed; */
  /* -webkit-background-size: cover; */
  /* -moz-background-size: cover; */
  /* -o-background////-size: cover; */
  /* background-size: cover; */
  /* position: absolute; */
}
</style>