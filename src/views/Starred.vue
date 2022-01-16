<template>
  <v-card class="mx-auto display-1 font-weight-medium mt-14" max-width="1500">
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title">
          <v-list-item-content>
            <v-list-item-title v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({
    items: [
      {
        action: "mdi-ticket",
        items: [{ title: "Places" }],
        title: "Attractions",
      },
      {
        action: "mdi-silverware-fork-knife",
        active: true,
        items: [
          { title: "Breakfast & brunch" },
          { title: "New American" },
          { title: "Sushi" },
        ],
        title: "Dining",
      },
      {
        action: "mdi-school",
        items: [
          { title: "B.Tech" },
          { title: "M.Tech" },
          { title: "Post Graduation" },
        ],
        title: "Education",
      },
      {
        action: "mdi-run",
        items: [{ title: "Group" }, { title: "Relatives" }],
        title: "Family",
      },
      {
        action: "mdi-bottle-tonic-plus",
        items: [{ title: "Tonic" }, { title: "Tablets" }],
        title: "Health",
      },
      {
        action: "mdi-content-cut",
        items: [
          { title: "Swipe" },
          { title: "Employees" },
          { title: "Human Resource" },
        ],
        title: "Office",
      },
      {
        action: "mdi-tag",
        items: [{ title: "List Item" }],
        title: "Promotions",
      },
    ],
  }),
  computed: { ...mapGetters({}) },
  methods: {},
};
</script>