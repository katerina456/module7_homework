function Electric(name){
  this.name = name,
  this.powerSupply = 'electricity'
}

Electric.prototype.getTurn = function(turn) {
    if (turn == true) {
      console.log(`Device is on`);
    }
    else {
      console.log(`Device is off`);
    }
}

Electric.prototype.getCapacity = function(capacity, time){
    console.log(`Device consumed ${Math.round(capacity * time / 60)} watt in ${time} minutes`);
}

function HeatingElectric(name, heatingElement) {
  this.name = name,
  this.heatingType = heatingElement
}

HeatingElectric.prototype = new Electric();

HeatingElectric.prototype.getCapacity = function(capacity, time){
    console.log(`Heating device consumed ${Math.round(capacity * time / 60)} watt in ${time} minutes`);
}

function ComputerElectric(name, processor) {
  this.name = name,
  this.processorType = processor
}

ComputerElectric.prototype = new Electric();

ComputerElectric.prototype.compareYaer = function(year) {
  if (year > 2020) {
    console.log('computer is new')
  }
  else {
    console.log('computer is old')
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