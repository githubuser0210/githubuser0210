<template>
  <div>
    <v-btn @click="changeValue">Change Value</v-btn>
    {{ count }}
    <h1 v-show="progress">{{ name }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";

export default {
  data() {
    return {
      progress: 0,
    };
  },
  props: {
    count: {
      type: Number,
    },
    name: {
      type: String,
    },
  },
  computed: { ...mapGetters({}) },
  methods: {
    changeValue() {
      this.$emit("changedData", this.progress++);
    },
  },
};
</script>
<style scoped>
</style>