<template>
  <v-app style="height: 100%">
    <div v-if="$route.name == 'Sliders'">
      <v-row class="justify-center d-flex align-center">
        <v-col>
          <v-item-group mandatory>
            <v-container>
              <v-row>
                <v-col v-for="n in 3" :key="n" cols="12" md="4">
                  <v-item v-slot="{ active, toggle }">
                    <v-card
                      :color="active ? 'red' : 'green'"
                      class="d-flex align-center"
                      dark
                      height="200"
                      @click="toggle"
                    >
                      <v-scroll-y-transition>
                        <div
                          v-if="active"
                          class="display-3 flex-grow-1 text-center"
                        >
                          Clicked
                        </div>
                      </v-scroll-y-transition>
                    </v-card>
                  </v-item>
                </v-col>
              </v-row>
            </v-container>
          </v-item-group>
          <v-card>
            <v-container fluid>
              <v-row align="center">
                <v-col cols="12">
                  <v-autocomplete
                    v-model="values"
                    :items="items"
                    outlined
                    dense
                    chips
                    small-chips
                    label="Outlined"
                    multiple
                    v-on:change="value == null"
                  ></v-autocomplete>
                  <v-autocomplete
                    :items="items"
                    color="white"
                    item-text="name"
                    label="Outlined"
                    v-on:change="changeItem(item)"
                  ></v-autocomplete>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-container fluid>
            <v-switch v-model="switchMe">
              <template v-slot:label>
                Turn on the progress:
                <v-progress-circular
                  :indeterminate="switchMe"
                  :value="0"
                  size="24"
                  class="ml-2"
                ></v-progress-circular>
              </template>
            </v-switch>
          </v-container>
          <v-range-slider
            :tick-labels="seasons"
            :value="[0, 1]"
            min="0"
            max="3"
            ticks="always"
            tick-size="4"
          >
            <template v-slot:thumb-label="props">
              <v-icon dark>
                {{ season(props.value) }}
              </v-icon>
            </template>
          </v-range-slider>
          <v-card flat color="transparent">
            <v-subheader>Media volume</v-subheader>
            <v-card-text>
              <v-slider
                v-model="media"
                prepend-icon="mdi-volume-high"
              ></v-slider>
            </v-card-text>

            <v-subheader>Alarm volume</v-subheader>

            <v-card-text>
              <v-slider v-model="alarm" append-icon="mdi-alarm"></v-slider>
            </v-card-text>

            <v-subheader>Icon click callback</v-subheader>

            <v-card-text>
              <v-slider
                v-model="zoom"
                append-icon="mdi-magnify-plus-outline"
                prepend-icon="mdi-magnify-minus-outline"
                @click:append="zoomIn"
                @click:prepend="zoomOut"
              ></v-slider>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
// import { storeActions } from "../store/actions.constants";
// import { storeGetters } from "../store/getters.constants";
export default {
  data() {
    return {
      media: 0,
      alarm: 0,
      zoom: 0,
      switchMe: false,
      seasons: ["Winter", "Spring", "Summer", "Fall"],
      icons: ["mdi-snowflake", "mdi-leaf", "mdi-fire", "mdi-water"],
      items: ["foo", "bar", "fizz", "buzz"],
      values: ["foo", "bar"],
      value: null,
    };
  },
  computed: { ...mapGetters({}) },

  methods: {
    changeItem(item) {
      const text = item.name;
      return text;
    },
    zoomOut() {
      this.zoom = this.zoom - 10 || 0;
    },
    zoomIn() {
      this.zoom = this.zoom + 10 || 100;
    },
    season(val) {
      return this.icons[val];
    },
  },
};
</script>