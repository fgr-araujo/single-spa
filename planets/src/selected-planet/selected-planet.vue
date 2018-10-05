<template>
  <div class="selectedPlanet" v-if='!!selectedPlanet'>
    {{selectedPlanet.name}}
  </div>
</template>

<script>
export default {
  props: {
    selectedPlanet: Object
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
