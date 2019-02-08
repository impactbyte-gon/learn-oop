class Vehicle {
  constructor(name, weight, price) {
    this.name = name
    this.weight = weight // Kg 1 - 10000
    this.price = price // IDR 0 - 2000000000
  }
  accelerate() {
    console.log(`${this.name} is accelerating...`)
  }
  brake() {
    console.log(`${this.name} is braking!`)
  }
}

class LandVehicle extends Vehicle {
  constructor(name, weight, price, wheels, licensePlate) {
    super(name, weight, price)
    this.wheels = wheels // 1 - 20
    this.licensePlate = licensePlate
  }
  changeLicensePlate(newLicensePlate) {
    this.licensePlate = newLicensePlate
  }
}

class Car extends LandVehicle {
  constructor(name, weight, price, wheels, licensePlate, airConditioner) {
    super(name, weight, price, wheels, licensePlate)
    this.airConditioner = airConditioner // true / false
  }
}

class Bus extends Car {
  constructor(
    name,
    weight,
    price,
    wheels,
    licensePlate,
    airConditioner,
    toilet
  ) {
    super(name, weight, price, wheels, licensePlate, airConditioner)
    this.toilet = toilet
  }
}

class WaterVehicle extends Vehicle {
  constructor(name, weight, price, sail) {
    super(name, weight, price)
    this.sail = sail // true / false
  }
  addSail() {
    this.sail = true
  }
  removeSail() {
    this.sail = false
  }
}

const car = new Car('Bumblebee', 2000, 0, 4, 'B 1010 XYZ')

console.log(car)
