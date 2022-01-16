<template>
  <div class="left-side">
    <v-btn @click="eventBusEmitButton()">Emit Button</v-btn>
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
      counter: 0,
    };
  },
  computed: { ...mapGetters({}) },
  methods: {
    eventBusEmitButton() {
      this.counter++;
      EventBus.$emit("next", this.counter);
    },
  },
};
</script>

<style scoped>
</style>