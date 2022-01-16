<template>
  <v-card class="mx-auto display-1 font-weight-medium mt-14" max-width="1500">
    <v-list subheader two-line>
      <v-subheader inset>Folders</v-subheader>

      <v-list-item v-for="folder in folders" :key="folder.title">
        <v-list-item-avatar>
          <v-icon class="grey lighten-1" dark> mdi-folder </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="folder.title"></v-list-item-title>

          <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </template>
            <span>Photos</span>
          </v-tooltip>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>

      <v-subheader inset>Files</v-subheader>

      <v-list-item v-for="file in files" :key="file.title">
        <v-list-item-avatar>
          <v-icon :class="file.color" dark v-text="file.icon"></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="file.title"></v-list-item-title>

          <v-list-item-subtitle v-text="file.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </template>
            <span>Vacation</span>
          </v-tooltip>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({
    files: [
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "Jan 20, 2014",
        title: "Vacation itinerary",
      },
      {
        color: "amber",
        icon: "mdi-gesture-tap-button",
        subtitle: "Jan 10, 2014",
        title: "Kitchen remodel",
      },
    ],
    folders: [
      {
        subtitle: "Jan 9, 2014",
        title: "Photos",
      },
      {
        subtitle: "Jan 17, 2014",
        title: "Recipes",
      },
      {
        subtitle: "Jan 28, 2014",
        title: "Work",
      },
    ],
  }),
  computed: { ...mapGetters({}) },
  methods: {},
};
</script>