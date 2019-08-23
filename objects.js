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

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0)
    {
      this._numOfSensors = num
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
  
};
robot.numOfSensors = 100;

console.log(robot.numOfSensors)

// With get and set methods (one returns, one changes)

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep()

//Factory functions - this creates many instances of an object quickly. This example creates robots based off object params

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep()

// Deconstructed assignment - you can extract a key-value pair as a variable this way

const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotEntries = Object.entries(robot);
console.log(robotEntries);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true})
console.log(newRobot);
//Built in obkect methods. These are ways you can access lists of objects and shorthands -
// This will print
//
// [ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]
// [ [ 'model', 'SAL-1000' ],
//   [ 'mobile', true ],
//   [ 'sentient', false ],
//   [ 'armor', 'Steel-plated' ],
//   [ 'energyLevel', 75 ] ]
// { laserBlaster: true, voiceRecognition: true }


// The object that a method belongs to is called the calling object.
// The this keyword refers the calling object and can be used to access properties of the calling object.
// Methods do not automatically have access to other internal properties of the calling object.
// The value of this depends on where the this is being accessed from.
// We cannot use arrow functions as methods if we want to access other internal properties.
// JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
// The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
// Setters and getter methods allow for more detailed ways of accessing and assigning properties.
// Factory functions allow us to create object instances quickly and repeatedly.
// There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.
// As with any concept, it is a good skill to learn how to use the documentation with objects!
// You’re ready to start leveraging more elegant code for creating and accessing objects in your code!

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

console.log(beagle.numLegs);
