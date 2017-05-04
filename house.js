'use strict'

class House {

  constructor(components/*address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants*/) {
    this.address = ''
    if (components.hasOwnProperty('address')){
      this.address = components['address']
    }
    this.square_feet = ''
    if (components.hasOwnProperty('square_feet')){
      this.square_feet = components['square_feet']
    }
    this.num_bedrooms = 3
    if (components.hasOwnProperty('num_bedrooms')){
      this.num_bedrooms = components['num_bedrooms']
    }
    this.num_baths = 2
    if (components.hasOwnProperty('num_baths')){
      this.num_baths = components['num_baths']
    }
    this.cost = 320000
    if (components.hasOwnProperty('cost')){
      this.cost = components['cost']
    }
    this.down_payment = 0.20
    if (components.hasOwnProperty('down_payment')){
      this.down_payment = components['down_payment']
    }
    this.sold = false
    if (components.hasOwnProperty('sold')){
      this.sold = components['sold']
    }
    this.short_sale = false
    if (components.hasOwnProperty('short_sale')){
      this.short_sale = components['short_sale']
    }
    this.has_tenants = false
    if (components.hasOwnProperty('has_tenants')){
      this.has_tenants = components['has_tenants']
    }
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}
let component = {
  address: 'siapasuruhdatangjakarta',
  sequare_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true
}

const cool = new House(component)

console.log(cool.to_s())
