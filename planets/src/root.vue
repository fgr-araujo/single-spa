<template>
  <div class="rootDiv">
    <div class='left'>
      <planet-list
        v-on:selectPlanet='updateSelectedPlanet'
      >
      </planet-list>
    </div>
    <div class='right'>
      <selected-planet
        v-bind:selectedPlanet='selectedPlanet'
      >
      </selected-planet>
    </div>
  </div>
</template>

<script>
import PlanetList from './planet-list/planet-list.vue'
import SelectedPlanet from './selected-planet/selected-planet.vue'
  export default {
    data: () => ({
      selectedPlanet: undefined,
      planets: []
    }),
    components: {
      PlanetList,
      SelectedPlanet
    },
    mounted: function () {

    },
    methods: {
      updateSelectedPlanet: function (selectedPlanet) {
        this.selectedPlanet = selectedPlanet
      }
    }
  }
</script>

<style scoped>
.rootDiv {
  display: flex;
}

.left {
  padding: 24px;
  width: 30%;
}

.right {
  width: 70%;
  border-left: 2px solid var(--white);
  padding: 24px;
}
</style>
