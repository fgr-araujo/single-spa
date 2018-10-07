<template>
  <div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Name
      </div>
      <div class='attribute'>
        {{selectedPlanet.name}}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Climate
      </div>
      <div class='attribute'>
        {{selectedPlanet.climate}}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Diameter
      </div>
      <div class='attribute'>
        {{ selectedPlanet.diameter | formatDiameter }}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Gravity
      </div>
      <div class='attribute'>
        {{selectedPlanet.gravity}}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Population
      </div>
      <div class='attribute'>
        {{ selectedPlanet.population | formatPopulation }}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Terrain
      </div>
      <div class='attribute'>
        {{selectedPlanet.terrain}}
      </div>
    </div>
    <div class='planetAttribute'>
      <div class='attributeTitle'>
        Notable Residents
      </div>
      <div class='attribute'>
        <residents v-bind:residents='selectedPlanet.residents'>
        </residents>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { abbrNum } from './selected-planet.helper.js'
import Residents from './residents.vue'
export default {
  components: {
    Residents,
  },
  props: {
    selectedPlanet: Object
  },
  filters: {
    formatPopulation: function (value) {
      if(value === undefined) {
        return ''
      } else {
        const parsedValue = parseInt(value)
        if (isNaN(parsedValue)) {
          return value
        } else {
          return abbrNum(value)
        }
      }
    },
    formatDiameter: function (value) {
      if (value === undefined) {
        return ''
      } else {
        const parsedValue = parseInt(value)
        if (isNaN(parsedValue)) {
          return value
        } else {
          return `${value} Kilometers (${value * 0.621371} Miles)`
        }
      }
    }
  }
}
</script>

<style scoped>
.planetAttribute {
  display: flex;
}

.attributeTitle {
  font-weight: bold;
  padding-right: 16px;
  width: 150px;
}
</style>
