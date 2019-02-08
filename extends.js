class Human {
  constructor(name, gender) {
    this.name = name
    this.gender = gender
  }

  walk() {
    console.log(`${this.name} is walking...`)
  }
}

class Employee extends Human {
  constructor(name, gender, salary) {
    super(name, gender)
    this.salary = salary
  }
}

const BaraLimbong = new Human('Bara Limbong', 'male', 10000)
const SaktiMandraguna = new Employee('Sakti Men', 'male', 200000)

BaraLimbong.walk()
SaktiMandraguna.walk()
