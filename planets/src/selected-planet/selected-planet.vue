<template>
  <div>
    <div class="selectedPlanet" v-if='!!selectedPlanet'>
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
    <div class="selectedPlanet" v-if='!selectedPlanet'>
      No planet selected
    </div>
  </div>
</template>

<script>
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
// copied from stack overflow
function abbrNum (number, decPlaces = 2) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10, decPlaces)

  // Enumerate number abbreviations
  const abbrev = [ "k", "m", "b", "t" ]
  let newNumber = number

  // Go through the array backwards, so we do the largest first
  for (let i=abbrev.length-1; i>=0; i--) {

    // Convert array index to "1000", "1000000", etc
    const size = Math.pow(10,(i+1)*3)

    // If the number is bigger or equal do the abbreviation
    if(size <= newNumber) {
      // Here, we multiply by decPlaces, round, and then divide by decPlaces.
      // This gives us nice rounding to a particular decimal place.
      newNumber = Math.round(number*decPlaces/size)/decPlaces

      // Handle special case where we round up to the next abbreviation
      if((newNumber == 1000) && (i < abbrev.length - 1)) {
        newNumber = 1
        i++
      }

      // Add the letter for the abbreviation
      newNumber += abbrev[i]

      // We are done... stop
      break
    }
  }
  return newNumber
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
