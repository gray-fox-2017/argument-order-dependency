'use strict'

class House {

  constructor(unit) {
    this.address = unit.address
    this.square_feet = unit.square_feet
    this.num_bedrooms = unit.num_bedrooms || 3
    this.num_baths = unit.num_baths || 2
    this.cost = unit.cost || 320000
    this.down_payment = unit.down_payment || 0.20
    this.sold = unit.sold || false
    this.short_sale = unit.short_sale
    this.has_tenants = unit.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{45}$/g, '****')
  }

  buy(input) {
    if (input['money'] >= this.down_payment && input['good_credit']) {
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

let jjib = {
  address: 'Jl. Rempoa Raya No. 5 Bintaro Pesanggrahan Jakarta Selatan 12330',
  num_bedrooms: 2,
  num_baths: 2,
  cost: 'Rp. 13.000.000,- / m2',
  down_payment: 12345,
  sold: true,
  has_tenants: true
}
jjib['square_feet']= 100;

const cool = new House(jjib)

console.log(cool.to_s())
