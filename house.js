'use strict'

class House {

  constructor(unit) {
    this.address = unit[address]
    this.square_feet = unit[square_feet]
    this.num_bedrooms = unit[num_bedrooms] || 3
    this.num_baths = unit[num_baths] || 2
    this.cost = unit[cost] || 320000
    this.down_payment = unit[down_payment] || 0.20
    this.sold = unit[sold] || false
    this.short_sale = unit[short_sale]
    this.has_tenants = unit[has_tenants] || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
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

const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)

console.log(cool.to_s())
