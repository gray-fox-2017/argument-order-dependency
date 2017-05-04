'use strict'

class House {

  constructor(components) {
    this.address = components['address'];
    this.square_feet = components['square_feet'] || 3;
    this.num_bedrooms = components['num_bedrooms'] || 3;
    this.num_baths = components['num_baths'] || 2;
    this.cost = components['cost'] || 320000;
    this.down_payment = components['down_payment'] || 0.20;
    this.sold = components['sold'] || false;
    this.short_sale = components['short_sale'];
    this.has_tenants = components['has_tenants'] || true;
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true;
    }
  }

  down_payment() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const cool = new House({address: 'Jl. Jatiwaringin no.70', square_feet: 10, num_bedrooms: 7, num_baths: 4, cost: 1500, down_payment: 12000, sold: true, has_tenants: true});

console.log(cool.to_s())
