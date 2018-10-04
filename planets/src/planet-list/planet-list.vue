<template>
  <div class="planetList">
    <button
      @click='fetch()'
      :disabled='loading || !nextPage'
      class='brand-button margin-bottom-16'
    >
      Fetch More planets
    </button>
    <div v-for='planet in planets'>
      <planet
        v-bind:planet='planet'
        @selectPlanet='handlePlanetSelect'
      >
      </planet>
    </div>
    <div v-if='loading'>
      Loading ...
    </div>
  </div>
</template>

<script>
import { getPlanets } from '../utils/api.js'
import Planet from './planet.vue'
export default {
  data: () => ({
    selectedPlanet: undefined,
    planets: [],
    loading: false,
    nextPage: true,
  }),
  mounted: function () {
    this.subscriptions = []
    this.pageNum = 1
    this.fetch()
  },
  beforeDestroy: function () {
    this.subscriptions.forEach(cancelable => {
      cancelable.unsubscribe()
    })
  },
  components: {
    Planet
  },
  methods: {
    handlePlanetSelect: function (planet) {
      this.$emit('selectPlanet', planet)
    },
    fetchWithNum: function (page) {
      this.fetch(page)
    },
    fetch: function (page = this.pageNum) {
      this.loading = true
      this.subscriptions.push(getPlanets(page).subscribe(
        (results) => {
          this.planets = [...this.planets, ...results.results]
          this.nextPage = !!results.next
          this.loading = false
          this.pageNum = this.pageNum + 1
        },
        (err) => {
          this.loading = false
          console.error(err)
        }
      ))
    }
  }
}
</script>

<style scoped>
</style>
