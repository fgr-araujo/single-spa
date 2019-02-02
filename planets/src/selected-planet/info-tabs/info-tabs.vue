<template>
  <div>
    <div class='tabs'>
      <router-link
        class='tabLink'
        :to="{name: 'attributes', params: {selectedPlanet:selectedPlanet}}"
        >
        <div>
          Attributes
        </div>
      </router-link>
      <router-link
        class='tabLink'
        :to="{name: 'people', params: {selectedPlanet:selectedPlanet}}"
        >
        <div>
          People
        </div>
      </router-link>
      <div>
        Films
      </div>
    </div>
    <router-view>

    </router-view>
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
.tabs {
  display: flex;
  font-size: 32px;
}
.tabLink {
  background-color: var(--gray);
  padding: 4px 8px;

}
</style>
