'use strict'

class House {

  constructor(components) {
    this.address = components["address"];
    this.square_feet = components["square_feet"];
    this.num_bedrooms = 3;
    if (components.hasOwnProperty("num_bedrooms")) {
      this.num_bedrooms = components["num_bedrooms"];
    }
    this.num_baths = 2;
    if (components.hasOwnProperty("num_baths")) {
      this.num_baths = components["num_baths"];
    }
    this.cost = 320000;
    if (components.hasOwnProperty("cost")) {
      this.cost = components["cost"];
    }
    this.down_payment = 0.20;
    if (components.hasOwnProperty("down_payment")) {
      this.down_payment = components["down_payment"];
    }
    this.sold = false;
    if (components.hasOwnProperty("sold")) {
      this.sold = components["sold"];
    }
    this.short_sale = components["short_sale"];
    this.has_tenants = false;
    if (components.hasOwnProperty("has_tenants")) {
      this.has_tenants = components["has_tenants"];
    }
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****');
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)

console.log(cool.to_s())
