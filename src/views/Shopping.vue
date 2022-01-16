<template>
  <v-app style="height: 100%">
    <div v-if="$route.name == 'Shopping'">
      <v-row class="justify-center d-flex align-center mt-0">
        <v-col>
          <div class="text-center">
            <v-btn
              color="deep-purple accent-4"
              class="white--text"
              @click="overlay = !overlay"
            >
              Launch Application
              <v-icon right> mdi-open-in-new </v-icon>
            </v-btn>

            <v-overlay :value="overlay">
              <v-progress-circular
                indeterminate
                size="64"
              ></v-progress-circular>
            </v-overlay>
          </div>
          <v-card id="create">
            <v-container fluid>
              <v-row class="child-flex">
                <v-col cols="12" sm="6" md="4">
                  <v-subheader>Options</v-subheader>
                  <v-checkbox
                    v-model="hover"
                    label="Open on hover"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-subheader>FAB location</v-subheader>
                  <v-checkbox
                    v-model="top"
                    label="Top"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="right"
                    label="Right"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="bottom"
                    label="Bottom"
                    hide-details
                  ></v-checkbox>
                  <v-checkbox
                    v-model="left"
                    label="Left"
                    hide-details
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-subheader>Speed dial direction</v-subheader>
                  <v-radio-group v-model="direction" hide-details>
                    <v-radio value="top" label="Top"></v-radio>
                    <v-radio value="right" label="Right"></v-radio>
                    <v-radio value="bottom" label="Bottom"></v-radio>
                    <v-radio value="left" label="Left"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-container>
            <v-speed-dial
              v-model="fab"
              :top="top"
              :bottom="bottom"
              :right="right"
              :left="left"
              :direction="direction"
              :open-on-hover="hover"
              :transition="transition"
            >
              <template v-slot:activator>
                <v-btn v-model="fab" color="blue darken-2" dark fab>
                  <v-icon v-if="fab"> mdi-close </v-icon>
                  <v-icon v-else> mdi-account-circle </v-icon>
                </v-btn>
              </template>

              <v-btn fab dark small color="green">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn fab dark small color="indigo">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn fab dark small color="red">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-card>
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="deep-orange darken-1"
              centered
              dark
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                Recents
                <v-icon>mdi-phone</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Favorites
                <v-icon>mdi-heart</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Nearby
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",

    overlay: false,
    tab: null,
    text:
      "Malcolm will talk with the general contractor about his timeline and the materials he will need for the brick courtyard.Heather said she can create the flyer to alert all the neighbors about upcoming construction.Dan and Beth will both work with city officials and the traffic engineer on securing the area for construction.Esther, can you send everyone the Excel document with the real estate estimates.",
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    },
    ...mapGetters({}),
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    },
    overlay(val) {
      val &&
        setTimeout(() => {
          this.overlay = false;
        }, 3000);
    },
  },
  methods: {},
};
</script>
<style>
.v-application .mt-0 {
  margin-top: 81px !important;
}
/* .container {
  width: 100%;
  padding: 188px;
  margin-right: auto;
  margin-left: auto;
} */
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>