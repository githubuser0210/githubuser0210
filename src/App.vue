<template>
  <v-app>
    <AppBar></AppBar>
    <v-main class="mt-n16">
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
export default {
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
    tab: null,
    items: ["web", "shopping", "videos", "images", "news"],
  }),
  components: {
    Footer,
    AppBar,
  },
};
</script>
<style scoped>
.v-application .mt-n16 {
  margin-top: -721px !important;
}
</style>
