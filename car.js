'use strict'

class Car {

  start_car(options) {
    if (options && options.hasOwnProperty(['headlights']))   {
      this.headlights = options['headlights']
    }
    else {
      this.headlights = true
    }

    if (options && options['gear']) {
      this.gear = options['gear']
    } else {
      this.gear = 1
    }
  }
}

const herbie = new Car()

// When we start the car, the headlights should be on by default
herbie.start_car()

console.log(herbie.headlights) // true


let opsi = {
  headlights : false
}
herbie.start_car(opsi)

console.log(herbie.headlights) // true ...KOK BISA?!


