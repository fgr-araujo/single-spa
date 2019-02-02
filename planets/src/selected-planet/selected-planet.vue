<template>
  <div>
    <Header v-bind:selectedPlanet='selectedPlanet'>
    </Header>
    <InfoTabs v-bind:selectedPlanet='selectedPlanet'>
    </InfoTabs>
  </div>
</template>

<script>
import Header from './header.vue'
import InfoTabs from './info-tabs/info-tabs.vue'
export default {
  components: {
    Header,
    InfoTabs,
  },
  props: {
    selectedPlanet: Object
  }
}
</script>
