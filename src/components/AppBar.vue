<template>
  <v-app>
    <v-app-bar dark class="appbar" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          @click="$router.push({ name: 'Web' })"
          alt="Nature Wind"
          class="shrink mr-2"
          contain
          transition="scale-transition"
          src="../assets/logo latest.png"
          width="180"
        />
      </div>
      <!-- <div class="primary"> -->
      <div class="d-flex ml-6">
        <v-btn
          elevation="0"
          class="body-2 text-capitalize mr-2 white--text"
          text
          @click="$router.push({ name: 'Web' })"
        >
          Web
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Shopping' })"
        >
          Shopping
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Places' })"
        >
          Places
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Products' })"
        >
          Products
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Sliders' })"
        >
          Rangers
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Date Pickers' })"
        >
          Date Pickers
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'Parent' })"
        >
          Props
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'AmCharts' })"
        >
          AmCharts
        </v-btn>
        <v-btn
          elevation="0"
          class="body-2 mr-2 font-weight-medium text-capitalize white--text"
          text
          @click="$router.push({ name: 'GridLayout' })"
        >
          Grid
        </v-btn>
      </div>
      <!-- </div> -->
      <!-- <template>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="red"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">{{ item }} </v-tab>
        </v-tabs>
      </template> -->

      <v-spacer></v-spacer>
      <v-badge right content="6" color="red">
        <v-icon large color="white">mdi-cart</v-icon>
      </v-badge>
      <!-- <router-link to="/SignUp"> -->
      <!-- <v-btn
        class="mx-2"
        dark
        small
        color="green"
        @click="$router.push({ name: 'SignUp' })"
        >SignUp</v-btn
      > -->
      <v-btn
        class="mx-2"
        dark
        small
        color="green"
        @click="$router.push({ name: 'Login' })"
        >Login</v-btn
      >
      <!-- </router-link> -->

      <v-menu bottom left attach offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-icon color="red darken-2">mdi-gmail</v-icon>
            <v-btn text left> Gmail </v-btn>
          </v-list-item>
          <v-list-item>
            <v-icon color="cyan darken-1">mdi-linkedin</v-icon>
            <v-btn text left> LinkedIn </v-btn>
          </v-list-item>
          <v-list-item>
            <v-icon color="indigo">mdi-facebook</v-icon>
            <v-btn text left> Facebook </v-btn>
          </v-list-item>
          <v-list-item>
            <v-icon color="blue lighten-1">mdi-twitter</v-icon>
            <v-btn text left> Twitter </v-btn>
          </v-list-item>
          <v-list-item>
            <v-icon color="red lighten-3">mdi-instagram</v-icon>
            <v-btn text left> Instagram </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="red" size="28">
              <span class="white--text headline">H</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-icon color="blue lighten-1">mdi-account</v-icon>
              <v-btn text left> Profile </v-btn>
            </v-list-item>
            <v-list-item>
              <v-icon color="orange accent-4">mdi-logout</v-icon>
              <v-btn text left> Logout </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-system-bar></v-system-bar>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Harsha GL </v-list-item-title>
            <v-list-item-subtitle>harshagaaja@hgl.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item @click="$router.push({ name: 'Inbox' })">
            <v-list-item-icon>
              <v-icon>mdi-inbox-arrow-down</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Inbox</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="$router.push({ name: 'Shared with me' })">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Starred' })">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Recent' })">
            <v-list-item-icon>
              <v-icon>mdi-history</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Recent</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Offline' })">
            <v-list-item-icon>
              <v-icon>mdi-check-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Offline</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Uploads' })">
            <v-list-item-icon>
              <v-icon>mdi-upload</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Uploads</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="$router.push({ name: 'Backups' })">
            <v-list-item-icon>
              <v-icon>mdi-cloud-upload</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Backups</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    tab: null,
    selectedItem: 0,
    // items: [
    //   { text: "Inbox", icon: "mdi-inbox-arrow-down" },
    //   { text: "Shared with me", icon: "mdi-account-multiple" },
    //   { text: "Starred", icon: "mdi-star" },
    //   { text: "Recent", icon: "mdi-history" },
    //   { text: "Offline", icon: "mdi-check-circle" },
    //   { text: "Uploads", icon: "mdi-upload" },
    //   { text: "Backups", icon: "mdi-cloud-upload" },
    // ],
  }),
  computed: {
    // ...mapGetters({}),
  },
  methods: {},
};
</script>
<style scoped>
.appbar {
  background: linear-gradient(-45deg, #ff7c00 0%, #c7097e 100%);
}
</style>