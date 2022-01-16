<template>
  <v-app style="height: 100%">
    <v-row class="justify-center d-flex align-center">
      <v-col>
        <!-- <v-btn primary dark>Parent</v-btn> -->
        <child :count="value" :name="name" @changedData="gettingChangedData" />
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Child from "./Child";
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      value: 5,
      name: "Harsha",
    };
  },
  components: {
    Child,
  },
  computed: { ...mapGetters({}) },
  methods: {
    gettingChangedData(data) {
      this.value = data;
    },
  },
};
</script>

<style scoped>
</style>