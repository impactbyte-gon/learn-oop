class Vehicle {
  constructor({ name, weight, price }) {
    this.name = name

    // Kg 1 - 10000
    typeof weight === 'number'
      ? (this.weight = weight)
      : console.error('Weight is not a number!')

    this.price = Number(price) // IDR 0 - 2000000000
  }
}

const car = new Vehicle({
  price: 0,
  weight: '3000',
  name: 'Optimus Prime'
})

console.log(car)
