import Vue from "vue";
import Vuex from "vuex";
import AppBar from "../store/modules/AppBar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    AppBar,
  },
});
