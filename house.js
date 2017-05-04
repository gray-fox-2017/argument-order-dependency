'use strict'

class House {

  constructor(components) {
    this.address = components['address']
    this.square_feet = components['square_feet']
    this.num_bedrooms = components['num_bedrooms']|| 3
    this.num_baths = components['num_baths'] || 2
    this.cost = components['cost'] || 320000
    this.down_payment = components['down_payment'] || 0.20
    this.sold = components['sold'] || false
    this.short_sale = components['short_sale']
    this.has_tenants = components['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');
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

let obj = {};
obj.address = 'Jl. Sultan Iskandar Muda No.7'
obj.square_feet = '100'
obj.num_bedrooms = '2'
obj.num_baths = '2'
obj.cost = '12345'
obj.down_payment = '12345'
obj.sold = true
obj.has_tenants = true
const cool = new House(obj)

console.log(cool.address);
console.log(cool.to_s())
