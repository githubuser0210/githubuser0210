<template>
  <v-footer class="indigo" dark padless fixed>
    <v-row justify="center" no-gutters>
      <v-col class="indigo py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>@HGLSolutions</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data: () => ({}),
  computed: { ...mapGetters({}) },
  methods: {},
};
</script>