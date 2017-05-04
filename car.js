'use strict'

class Car {

  start_car(options) {
    if (options && options['headlights']) {
      this.headlights = options['headlights']
    } else {
      this.headlights = true
    }

    if (options && options ['gear']) {
      this.gear = options['gear']
    } else {
      this.gear = 1
    }
  }
}

const herbie = new Car()
const jazz = new Car()
// When we start the car, the headlights should be on by default
herbie.start_car();

console.log(herbie.headlights) // true

// But what happens when we want to start without headlights?
herbie.start_car({
  headlights: false
})

console.log(herbie.headlights.hasOwnProperty()) // true ...KOK BISA?!

jazz.start_car({
  gear : false
})
console.log(jazz.gear.hasOwnProperty());
