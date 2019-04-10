window.SystemJS = window.System

import lodash from 'lodash'
import * as singleSpa from 'single-spa'

window._ = lodash

registerDep('lodash', () => {
  const lodash = require('lodash')
  return { default: lodash }
})

// See https://rxjs.dev/guide/v6/migration for Import Paths explanation
registerDep('rxjs', () => require('rxjs'))
registerDep('rxjs/operators', () => require('rxjs/operators'))

registerDep('single-spa', () => require('single-spa'))
registerDep('react', () => require('react'))
registerDep('react-dom', () => require('react-dom'))
registerDep('react-dom/server', () => require('react-dom/server'))

function registerDep(name, requirer) {
  window.System.set(name, requirer())
}
