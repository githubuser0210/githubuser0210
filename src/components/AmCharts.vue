<template>
  <v-app>
    <div class="">
      <pie-chart />
      <bar-chart />
    </div>
  </v-app>
</template>
<script>
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
export default {
  name: "HelloWorld",
  data: () => ({}),

  components: {
    PieChart,
    BarChart,
  },
  mounted() {},
};
</script>

<style scoped>
</style>