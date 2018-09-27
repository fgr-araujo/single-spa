import * as isActive from './activityFns.js'
import * as singleSpa from 'single-spa'

console.log('singleSpa', singleSpa)

singleSpa.registerApplication('navbar', SystemJS.import('navbar/navbar.js'), isActive.navbar)
singleSpa.registerApplication('people', SystemJS.import('people/people.js'), isActive.people)

singleSpa.start()
