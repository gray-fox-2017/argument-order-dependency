'use strict'

class House {

  constructor(data) {
    this.address = data['address']
    this.square_feet = data.square_feet
    this.num_bedrooms = data.num_bedrooms || 3
    this.num_baths = data.num_baths || 2
    this.cost = data.cost || 320000
    this.down_payment = data.down_payment || 0.20
    this.sold = data.sold || false
    this.short_sale = data.short_sale
    this.has_tenants = data.has_tenants || false
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

let atributHouse = {
  address : 'Jl. Sultan Iskandar Muda',
  square_feet   :  1000,
  num_bedrooms  : 3,
  num_baths  : 2,
  cost  :  50000,
  down_payment  : 20,
  sold  : true,
  short_sale : true,
  has_tenants : true
}
const cool = new House(atributHouse)

console.log(cool.to_s())
