'use strict'

class House {

  constructor(param) {
    this.address = param['address']
    this.square_feet = param['square_feet']
    this.num_bedrooms = param['num_bedrooms']
    this.num_baths = param['num_baths']
    this.cost = param['cost']
    this.down_payment = param['down_payment']
    this.sold = param['sold']
    this.short_sale = param['short_sale']
    this.has_tenants = param['has_tenants']
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

let param = {
  address : 'jl. Kampung Kodo',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 0.2,
  sold : true,
  short_sale : true,
  has_tenants : true
}

const cool = new House(param)

console.log(cool.to_s())
