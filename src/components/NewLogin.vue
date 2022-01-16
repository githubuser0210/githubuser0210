<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-card class="elevation-12">
                <v-window v-model="step">
                  <v-window-item :value="1">
                    <v-row class="fill-height">
                      <v-col cols="12" md="4" class="left-background">
                        <v-card-text class="white--text mt-16 py-16">
                          <p class="text-center display-1 mt-8">Welcome!</p>
                          <p class="text-center">
                            To keep connected with us please login with your
                            details
                          </p>
                        </v-card-text>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                        sm="12"
                        class="text-h5 font-weight-medium py-0"
                      >
                        <v-card-text class="mt-4">
                          <h1 class="signin">Sign In</h1>

                          <v-col class="mt-5 py-2" md="11" cols="12">
                            <label class="caption">Base URL</label>
                            <v-text-field
                              id="baseURL"
                              placeholder="http://domain:port"
                              v-model="baseURL"
                              outlined
                              dense
                              required
                              class=""
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="12" md="11" class="py-2">
                            <label class="caption">EMAIL</label>
                            <v-text-field
                              id="username"
                              placeholder="example@xxx.com"
                              v-model="email"
                              outlined
                              dense
                              :rules="emailRules"
                              required
                              class=""
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="12"
                            md="11"
                            class="pt-2 pb-0 mb-0"
                          >
                            <label class="caption">PASSWORD</label>
                            <v-text-field
                              id="password"
                              v-model="password"
                              name="name"
                              placeholder="password"
                              :append-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                              :rules="passwordRules"
                              @input="text = ''"
                              :type="visible ? 'password' : 'text '"
                              @click:append="visible = !visible"
                              class="caption login-form-input"
                              @keyup.enter="login()"
                              required
                              outlined
                              dense
                            ></v-text-field>
                            <font color="red" class="">{{ text }}</font>
                          </v-col>
                        </v-card-text>
                        <v-col cols="12" class="text-center pb-12">
                          <v-btn
                            id="loginBtn"
                            :disabled="
                              !valid || password == null || email == null
                            "
                            elevation-0
                            class="orange darken-1"
                            depressed
                            @click="setBaseURL()"
                            >LOGIN</v-btn
                          >
                        </v-col>
                      </v-col>
                    </v-row>
                  </v-window-item>
                </v-window>
              </v-card>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { storeActions } from "../store/actions.constants";
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({
    step: 1,
    baseURL: null,
    errorMessage: null,
    valid: true,
    validF: true,
    visible: true,
    password: null,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 8) || "One A-Z and a-z and 1-9 and min 8 character",
      (v) => /[a-z]/.test(v) || "One A-Z and a-z and 1-9 and min 8 character",
      (v) => /[A-Z]/.test(v) || "One A-Z and a-z and 1-9 and min 8 character",
      (v) => /[0-9]/.test(v) || "One A-Z and a-z and 1-9 and min 8 character",
    ],
    email: null,
    text: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  computed: {
    ...mapState({
      userState: (state) => state,
    }),
    // This method is used to get projects from store
    ...mapGetters({
      isHeader: `user/${[storeGetters.authenticationStatus]}`,
      currentUser: `user/${[storeGetters.loginGetter]}`,
    }),
  },
  beforeMount() {
    if (this.isHeader) {
      this.$router.push({ name: "Configuration" });
    }
  },
  methods: {
    setBaseURL() {
      let payLoad = {
        baseURL: this.baseURL,
      };
      this.$store
        .dispatch(`user/${storeActions.addBaseURL}`, payLoad)
        .then((res) => {
          this.login();
          return res;
        });
    },
    login() {
      if (this.$refs.form.validate()) {
        this.text = "";
        let payLoad = {
          email: this.email.trim(),
          password: this.password,
        };
        this.$store
          .dispatch(`user/${storeActions.loginAction}`, payLoad)
          .then((res) => {
            this.$router.push({ name: "Configuration" });
            return res;
          })
          .catch((err) => {
            this.text = err.response.data.message;
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.electron-mobe-login ::v-deep .v-label {
  font-size: 12px;
}
.left-background {
  background: linear-gradient(-45deg, #ff7c00 0%, #c7097e 100%);
  // background: linear-gradient(-45deg, #80cbc4 0%, #00796b 100%);
}
.signin {
  color: #e65100;
  // color: #00796b;
}
</style>