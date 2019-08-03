const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
};

console.log(robot.provideInfo())

//Object with properties and a method (provide info)

const robot = {
  _energyLevel: '100',
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot._energyLevel = 30

console.log(robot.recharge())

// This will change the robot energy level by reassigning it in the object. This will print Recharged! Energy is currently at 60%.

