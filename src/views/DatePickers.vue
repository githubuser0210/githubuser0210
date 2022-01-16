<template>
  <v-app style="height: 100%">
    <div v-if="$route.name == 'Date Pickers'">
      <v-row class="justify-center d-flex align-center mt-0">
        <v-col>
          <v-date-picker v-model="picker"></v-date-picker>

          <component1 />
          <component2 />
          <v-spacer></v-spacer>
          <v-btn color="primary" dark @click="getUsersData()"
            >Generate Data
          </v-btn>
          <v-row>
            <v-col cols="12" class="mx-auto mt-0 pt-0">
              <v-simple-table
                class="elevation-1 data-tale-applist ml-2 mr-5 mt-16"
              >
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Emp Id</th>
                      <th class="text-left">Email</th>
                      <th class="text-left">FirstName</th>
                      <th class="text-left">LastName</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in users" :key="item.id">
                      <td>{{ item.id }}</td>
                      <td>{{ item.email }}</td>
                      <td>{{ item.first_name }}</td>
                      <td>{{ item.last_name }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import { mapGetters } from "vuex";
import { storeActions } from "../store/actions.constants";
import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      page: 1,
    };
  },
  components: {
    Component1,
    Component2,
  },
  mounted() {
    //console.log(this.users);
  },
  computed: {
    ...mapGetters({
      users: `AppBar/${[storeGetters.getUsers]}`,
    }),
  },
  methods: {
    getUsersData() {
      this.$store.dispatch(`AppBar/${storeActions.fetchDataFromAPI}`, {
        page: this.page,
      });
    },
  },
};
</script>

<style scoped>
.v-application .mt-0 {
  margin-top: 81px !important;
}
</style>
