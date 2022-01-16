<template>
  <v-app>
    <v-parallax dark src="../assets/Nature2.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h4 dark class="display-1 font-weight-thin mb-4">
            A global communications group, delivering integrated solutions to
            our clients.
          </h4>
          <v-btn
            class="mx-2"
            dark
            small
            color="red"
            @click="$router.push({ name: 'Login' })"
            >Join Today</v-btn
          >
        </v-col>
      </v-row>
    </v-parallax>

    <v-carousel hide-delimiters>
      <v-carousel-item class="mt-5" src="../assets/Tech.jpg"></v-carousel-item>
      <v-carousel-item
        class="mt-16 top"
        src="../assets/Business.jpg"
      ></v-carousel-item>
    </v-carousel>
    <div>
      <v-bottom-navigation v-model="value" :background-color="color" dark shift>
        <v-btn>
          <span>Video</span>

          <v-icon>mdi-television-play</v-icon>
        </v-btn>

        <v-btn>
          <span>Music</span>

          <v-icon>mdi-music-note</v-icon>
        </v-btn>

        <v-btn>
          <span>Book</span>

          <v-icon>mdi-book</v-icon>
        </v-btn>

        <v-btn>
          <span>Image</span>

          <v-icon>mdi-image</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({ value: 1 }),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return "blue-grey";
        case 1:
          return "teal";
        case 2:
          return "brown";
        case 3:
          return "indigo";
        default:
          return "blue-grey";
      }
    },
    ...mapGetters({}),
  },
  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("Destroyed");
  },
  methods: {},
};
</script>
<style scoped>
.v-application .mt-5 {
  margin-top: 64px !important;
}
.v-item-group.v-bottom-navigation {
  bottom: -45px;
}
</style>
