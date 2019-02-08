class Human {
  constructor(name, birthYear, gender) {
    this.name = name
    this.birthYear = birthYear
    this.gender = gender
  }

  setName(name) {
    this.name = name
  }

  getName() {
    return `The name is ${this.name}`
  }
}

const Fahrianda = new Human('Fahrianda', 1990, 'male')

Fahrianda.setName('Muhammad Fahrianda')
console.log(Fahrianda.getName())
