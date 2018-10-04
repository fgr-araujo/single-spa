<template>
  <div class="rootDiv">
    <div class='left'>
      <planet-list>
      </planet-list>
    </div>
    <div class='right'>
      right
    </div>
  </div>
</template>

<script>
import PlanetList from './planet-list/planet-list.vue'
  export default {
    data: () => ({
      selectedPlanet: undefined,
      planets: []
    }),
    components: {
      PlanetList
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
