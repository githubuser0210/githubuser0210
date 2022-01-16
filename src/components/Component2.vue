<template>
  <div class="right-side">
    <h1>{{ clicksCounted }}</h1>
  </div>
</template>

<script>
import { EventBus } from "../event-bus";
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      clicksCounted: 0,
    };
  },
  computed: { ...mapGetters({}) },
  created() {
    EventBus.$on("next", (data) => {
      this.clicksCounted = data;
      // console.log("Receving Data from Component1", data);
    });
  },
  beforeDestroy() {
    EventBus.$off("next");
  },
  methods: {},
};
</script>

<style scoped>
</style>