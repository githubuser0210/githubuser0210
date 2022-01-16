<template>
  <v-app>
    <v-container class="pt-0 p1-6 pr-6 display-charts" fluid>
      <v-row class="justify-start align start">
        <grid-layout
          class="pb-6 pt-0"
          :layout.sync="layout"
          :col-num="12"
          :row-height="30"
          :is-draggable="draggable"
          :is-resizable="resizable"
          :vertical-compact="true"
          :use-css-transforms="true"
        >
          <div>
            <grid-item
              class="ted-viewgrid-items"
              v-for="item in layout"
              :key="item.i"
              :static="item.static"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              :i="item.i"
            >
              <!-- <span class="text">{{ itemTitle(item) }}</span> -->
              <component :is="item.c"></component>
            </grid-item>
          </div>
        </grid-layout>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import PieChart from "../components/PieChart";
import BarChart from "../components/BarChart";
import VarianceIndicator from "../components/VarianceIndicator";
import GaugeChart from "../components/GaugeChart";
import TrendlineChart from "../components/TrendlineChart";
import MultiBarChart from "../components/MultiBarChart";
import StackChart from "../components/StackChart";
import ColumnChart from "../components/3DColumnChart";
import CylinderChart from "../components/3DCylinderChart";
// import TimelineChart from "../components/TimelineChart";
export default {
  components: {
    GridLayout,
    GridItem,
    PieChart,
    BarChart,
    VarianceIndicator,
    GaugeChart,
    TrendlineChart,
    MultiBarChart,
    StackChart,
    ColumnChart,
    CylinderChart,
    // TimelineChart,
  },
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 4, h: 6, i: "0", c: "PieChart", static: false },
        { x: 0, y: 0, w: 4, h: 6, i: "1", c: "BarChart", static: true },
        { x: 0, y: 0, w: 4, h: 6, i: "2", c: "GaugeChart", static: false },
        { x: 0, y: 0, w: 4, h: 6, i: "3", c: "TrendlineChart", static: false },
        { x: 0, y: 0, w: 7, h: 10, i: "10", c: "MultiBarChart", static: false },
        { x: 2, y: 6, w: 4, h: 6, i: "5", c: "StackChart", static: false },
        // { x: 0, y: 5, w: 2, h: 5, i: "6", c: "ColumnChart", static: false },
        { x: 0, y: 9, w: 10, h: 20, i: "7", c: "CylinderChart", static: false },
        {
          x: 0,
          y: 0,
          w: 4,
          h: 6,
          i: "8",
          c: "VarianceIndicator",
          static: false,
        },
        // { x: 6, y: 3, w: 2, h: 4, i: "9", c: "ColumnChart", static: true },
        // { x: 8, y: 4, w: 2, h: 4, i: "10", c: "", static: false },
        // { x: 10, y: 4, w: 2, h: 4, i: "11", c: "", static: false },
        // { x: 0, y: 10, w: 2, h: 5, i: "12", c: "", static: false },
        // { x: 2, y: 10, w: 2, h: 5, i: "13", c: "", static: false },
        // { x: 4, y: 8, w: 2, h: 4, i: "14", c: "", static: false },
        // { x: 6, y: 8, w: 2, h: 4, i: "15", c: "ColumnChart", static: false },
        // { x: 8, y: 10, w: 2, h: 5, i: "16", c: "", static: false },
        // { x: 10, y: 4, w: 2, h: 2, i: "17", c: "", static: false },
        // { x: 0, y: 9, w: 2, h: 3, i: "18", c: "", static: false },
        // { x: 2, y: 6, w: 2, h: 2, i: "19", c: "", static: false },
      ],
      draggable: true,
      resizable: true,
      index: 0,
    };
  },
  methods: {
    itemTitle(item) {
      let result = item.i;
      if (item.static) {
        result += " - Static";
      }
      return result;
    },
  },
};
</script>

<style scoped>
.vue-grid-layout {
  background: #eee0;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #ccc0;
  border: 1px solid #e0e0e0;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
.display-charts .row {
  display: block !important;
}
.ted-viewgrid-items:hover .chart-bar-close-edit {
  display: block;
  padding: 5px 5px 5px 0px !important;
}
</style>