<template>
  <a
    class="planet"
    v-on:click='handlePlanetSelect(planet)'
  >
    {{planet.name}}
  </a>
</template>

<script>
export default {
  props: {
    planet: Object
  },
  methods: {
    handlePlanetSelect: function (planet) {
      console.log('planet', planet)
      this.$emit('selectPlanet', planet)
    },
  }
}
</script>

<style scoped>
.planet {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--white);
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
}

.planet:last-child {
  border-bottom: none;
}

.planet:first-child {
  border-top: 1px solid var(--white);
}
</style>
