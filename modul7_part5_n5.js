class Electric {
  constructor(name) {
    this.name = name,
    this.powerSupply = 'electricity'
 }
  
  getTurn(turn) {
    turn ? console.log(`Device is on`) : console.log(`Device is off`);
}
  
  getCapacity(capacity, time) {
    console.log(`Device consumed ${Math.round(capacity * time / 60)} watt in ${time} minutes`);
}
  
}

 
class HeatingElectric extends Electric {
  constructor(heatingElement, name, turn, capacity, time) {
    super(name, turn, capacity, time);
    this.heatingType = heatingElement
  }
  
  getCapacity(capacity, time) {
    console.log(`Heating device consumed ${Math.round(capacity * time / 60)} watt in ${time} minutes`);
}
  
}


class ComputerElectric extends Electric {
  constructor(processor, name, turn, capacity, time) {
    super(name, turn, capacity, time);
    this.processorType = processor
  }
  
  getCapacity(capacity, time) {
    console.log(`Heating device consumed ${Math.round(capacity * time / 60)} watt in ${time} minutes`);
}
  
  compareYaer(year) {
  year > 2020 ? console.log('computer is new') : console.log('computer is old');
} 
  
}


const electricKettle = new HeatingElectric('electric kettle', 'boiler');
const lamp = new Electric('lamp');
const laptop = new ComputerElectric('laptop', 'intel');


console.log(electricKettle)
console.log(lamp)
console.log(laptop)

console.log(`Name: ${electricKettle.name}, type: ${electricKettle.heatingType}`)
electricKettle.getTurn(true)
electricKettle.getCapacity(2000, 5)

console.log(lamp.name)
laptop.getTurn(false)
laptop.getCapacity(100, 30)

console.log(`Name: ${laptop.name}, processor is ${laptop.processorType}`)
laptop.getTurn(false)
laptop.getCapacity(80, 20)
laptop.compareYaer(2017)