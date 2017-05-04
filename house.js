'use strict'

class House {

  constructor(paramHouse) {
    this.address = paramHouse.address.toString() // Object yang di panggil
    this.square_feet = paramHouse.square_feet //Object yang di panggil
    this.num_bedrooms = paramHouse.num_bedrooms || 3
    this.num_baths = paramHouse.num_baths || 2
    this.cost = paramHouse.cost || 320000
    this.down_payment = paramHouse.down_payment || 0.20
    this.sold = paramHouse.sold || false
    this.short_sale = paramHouse.short_sale
    this.has_tenants = paramHouse.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****').toString()
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

//const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)

var objHouse = {};

objHouse["address"] = "abc";
objHouse["square_feet"] = 100;
objHouse["num_bedrooms"] = 2;
objHouse["num_baths"] = 2;
objHouse["cost"] = 123456;
objHouse["down_payment"] = 123456;
objHouse["sold"] = true;
objHouse["short_sale"] = true;

const cool = new House(objHouse);

console.log(cool.to_s());