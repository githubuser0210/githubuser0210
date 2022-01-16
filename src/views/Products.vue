<template>
  <v-app>
    <div v-if="$route.name == 'Products'">
      <v-row>
        <v-col cols="12" class="mx-auto mt-0 pt-0">
          <v-simple-table class="elevation-1 data-tale-applist ml-2 mr-5 mt-16">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                  <th class="text-left">Energy</th>
                  <th class="text-left">Per 100g</th>
                  <th class="text-left">Fiber (g)</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in desserts"
                  :key="item.name"
                  @click="$router.push({ name: 'Products Details' })"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td v-if="item.grams === item.fiber">{{ item.energy }}</td>
                  <td v-else-if="item.calories === item.grams">
                    {{ item.energy }}
                  </td>
                  <td v-else>{{ "N/A" }}</td>
                  <td>{{ item.grams }}</td>
                  <td>{{ item.fiber }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        ></v-pagination>
      </div>
    </div>
    <router-view />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      page: 1,
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          energy: "Low",
          grams: "10cal",
          fiber: "2.5",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          energy: "Medium",
          grams: "15cal",
          fiber: "4.5",
        },
        {
          name: "Eclair",
          calories: 262,
          energy: "High",
          grams: "20cal",
          fiber: "5.5",
        },
        {
          name: "Cupcake",
          calories: 305,
          energy: "Low",
          grams: "25cal",
          fiber: "6.5",
        },
        {
          name: "Gingerbread",
          calories: 356,
          energy: "Medium",
          grams: "30cal",
          fiber: "7.5",
        },
        {
          name: "Jelly bean",
          calories: 375,
          energy: "High",
          grams: "35cal",
          fiber: "8.5",
        },
        {
          name: "Lollipop",
          calories: 392,
          energy: "Low",
          grams: "40cal",
          fiber: "9.5",
        },
        {
          name: "Honeycomb",
          calories: 408,
          energy: "Medium",
          grams: "45cal",
          fiber: "10.5",
        },
        {
          name: "Donut",
          calories: 452,
          energy: "High",
          grams: "50cal",
          fiber: "11.5",
        },
        {
          name: "KitKat",
          calories: 518,
          energy: "High",
          grams: "55cal",
          fiber: "12.5",
        },
      ],
    };
  },
  computed: { ...mapGetters({}) },
  methods: {},
};
</script>

<style scoped>
.v-application .mt-0 {
  margin-top: 0px !important;
}
</style>