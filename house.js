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

let jjib = {}
  jjib.address = 'Jl. Rempoa Raya No. 5 Bintaro Pesanggrahan Jakarta Selatan 12330';
  jjib.square_feet= 100,
  jjib.num_bedrooms= 2,
  jjib.num_baths= 2,
  jjib.cost= 'Rp. 13.000.000,- / m2',
  jjib.down_payment= 12345,
  jjib.sold= true,
  jjib.has_tenants= true

const cool = new House(jjib)

console.log(cool.to_s())
