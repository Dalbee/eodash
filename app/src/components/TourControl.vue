<template>
  <div class="elevation-3 pa-5 primary white--text"
    style="border-radius: 3px; width: 40vw">
    <!-- Welcome to {{ $store.state.config.appConfig.branding.appName }} -->
    
    <h3>{{ $store.state.indicators.selectedIndicator
      ? $store.state.indicators.selectedIndicator.city
      : 'Start Tour' }}</h3>
    <p>
      <small
        v-if="$store.state.indicators.selectedIndicator"
      >{{ $store.state.indicators.selectedIndicator.description }}</small>
    </p>
    <v-icon color="white" class="mr-3" @click="$store.state.config.tourPlayback
      ? pauseTour()
      : startTour()">
        {{ $store.state.config.tourPlayback
          ? 'mdi-pause-circle-outline'
          : 'mdi-play-circle-outline' }}
    </v-icon>
    <v-icon color="white" class="mx-3" @click="pauseTour(); previousItem()">mdi-menu-left</v-icon>
    <v-icon color="white" class="mx-3" @click="pauseTour(); nextItem()">mdi-menu-right</v-icon>
    <v-icon color="white" class="ml-3" @click="closeTour()">mdi-close-circle</v-icon>
    <v-progress-linear :value="progressValue" color="primary lighten-1"
      v-show="$store.state.config.tourPlayback"
      style="position: absolute; top: 0; left: 0; width: 100%"
    ></v-progress-linear>
  </div>
</template>

<script>
import {
  mapState,
} from 'vuex';

export default {
  data: () => ({
    map: null,
    playback: false,
    currentTourItem: 0,
    tourStops: null,
    progressValue: 0,
  }),
  computed: {
    ...mapState('config', [
      'appConfig',
    ]),
  },
  mounted() {
    if (this.$store.state.config.tourEnabled) {
      this.tourStops = this.appConfig.newsCarouselitems;
      this.startTour();
    }
  },
  methods: {
    startTour() {
      this.$store.commit('config/SET_TOUR_PLAYBACK', true);
      this.nextItem();
    },
    pauseTour() {
      clearInterval(this.playback);
      this.playback = false;
      this.$store.commit('config/SET_TOUR_PLAYBACK', false);
    },
    previousItem() {
      if (this.currentTourItem === 0) {
        this.currentTourItem = this.tourStops.length - 1;
      } else {
        this.currentTourItem--;
      }
      this.setPOI(this.tourStops[this.currentTourItem].poi);
    },
    nextItem() {
      if (this.currentTourItem === this.tourStops.length - 1) {
        this.currentTourItem = 0;
      } else {
        this.currentTourItem++;
      }
      this.setPOI(this.tourStops[this.currentTourItem].poi);
    },
    closeTour() {
      clearInterval(this.playback);
      this.playback = false;
      this.$store.commit('config/SET_TOUR_ENABLED', false);
      this.$store.commit('config/SET_TOUR_PLAYBACK', false);
    },
    setPOI(poi) {
      const aoiId = poi.split('-')[0];
      const indicatorCode = poi.split('-')[1];
      const selectedFeature = this.$store.state.features.allFeatures.find((f) => {
        const { indicatorObject } = f.properties;
        return indicatorObject.aoiID === aoiId
          && indicatorObject.indicator === indicatorCode;
      });
      this.$store.commit('indicators/SET_SELECTED_INDICATOR', selectedFeature.properties.indicatorObject);
      if (this.$store.state.config.tourEnabled && this.$store.state.config.tourPlayback) {
        clearInterval(this.playback);
        this.progressValue = 0;
        this.playback = setInterval(() => {
          this.progressValue += 1;
          if (this.progressValue >= 100) {
            this.progressValue = 0;
            clearInterval(this.playback);
            this.nextItem();
          }
        }, 100);
      }
    },
  },
};
</script>
