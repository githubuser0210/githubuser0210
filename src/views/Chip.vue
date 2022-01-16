<template>
  <v-app style="height: 100%">
    <v-row class="justify-center d-flex align-center">
      <v-col cols="12">
        <v-col cols="4" class="pa-md-4 mx-lg-auto">
          <v-card class="mx-auto" max-width="450">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
              :aspect-ratio="16 / 9"
            >
            </v-img>
            <v-card-title>
              <div class="display-1 mb-2">Welcome Home...</div>
              <div class="title font-weight-regular grey--text">
                Monday, 12:30 PM, Mostly Sunny
              </div>
            </v-card-title>
            <v-row class="px-4 grey--text" align="center">
              <v-avatar size="24" class="mr-4">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                  contain
                ></v-img>
              </v-avatar>

              <span>81° / 62°</span>
            </v-row>

            <v-divider class="mt-6 mx-4"></v-divider>

            <v-card-text>
              <v-chip class="mr-2" @click="lights">
                <v-icon left> mdi-brightness-5 </v-icon>
                Turn on Lights
              </v-chip>
              <v-chip class="mr-2" @click="alarm">
                <v-icon left> mdi-alarm-check </v-icon>
                Set alarm
              </v-chip>
              <v-chip @click="blinds">
                <v-icon left> mdi-blinds </v-icon>
                Close blinds
              </v-chip>
            </v-card-text>
          </v-card>

          <div class="text-center">
            <v-chip class="ma-2" label> Label </v-chip>

            <v-chip class="ma-2" color="pink" label text-color="white">
              <v-icon left> mdi-label </v-icon>
              Tags
            </v-chip>

            <v-chip class="ma-2" color="primary" label>
              <v-icon left> mdi-account-circle-outline </v-icon>
              John Leider
            </v-chip>

            <v-chip class="ma-2" close color="cyan" label text-color="white">
              <v-icon left> mdi-twitter </v-icon>
              New Tweets
            </v-chip>
          </div>
        </v-col>
        <v-col
          cols="12"
          class="justify-centre mt-2 mb-4 pt-0 pb-6 px-6 py-5 pa-6 ma-2"
        >
          <div class="text-center">
            <v-btn dark color="red darken-2" @click="snackbar = true">
              Greetings
            </v-btn>

            <v-snackbar v-model="snackbar" color="green">
              {{ text }}

              <template v-slot:action="{ attrs }">
                <v-btn
                  color="deep-orange darken-1"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      snackbar: false,
      text: `Congratulations on your Home!`,
    };
  },
  computed: { ...mapGetters({}) },
  methods: {
    alarm() {
      alert("Turning on alarm...");
      this.$emit("TurnOn", "Data Emitted from Child to Parent");
    },
    blinds() {
      alert("Toggling Blinds...");
    },
    lights() {
      alert("Toggling lights...");
    },
  },
};
</script>