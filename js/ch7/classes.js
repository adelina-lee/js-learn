// Classes and objects
// Class syntax
class ClassName {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
let obj = new ClassName("arg1", "arg2");
console.log(obj);

// Using function
/* function Dog(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
}
let dog = new Dog("Jacky", 30, "brown", "labrador"); */

// Using class
class Dog {
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName;
        this.weight = weight;
        this.color = color;
        this.breed = breed;
    }
}
let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");

// Constructors
class Person {
    #firstname;
    #lastname;
    constructor(firstname, lastname) {
        // Properties that won't be accessible outside
        this.#firstname = firstname;
        this.#lastname = lastname;

/*         this.firstname = firstname;
        this.lastname = lastname; */
    }
    
    // Functions
    greet() {
        console.log("Hi there! I'm", this.firstname);
    }

    compliment(name, object) {
        return "That's a wonderful " + object + ", " + name;
    }
    
    // Setters and Getters
    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

    get lastname() {
        return this.#lastname;
    }

    set lastname(lastname) {
        this.#lastname = lastname;
    }
}
let p = new Person("Maiike", "van Putten");
console.log("Hi", p.firstname);
p.greet();

let compliment = p.compliment("Harry", "hat");
console.log(compliment);

// Inheritance
class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    move() {
        console.log("moving at", this.currentSpeed);
    }

    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }

    doWheelie() {
        console.log("Driving on one wheel!");
    }
}
let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
motor.doWheelie();

// Prototype
Person.prototype.introduce = function() {
    console.log("Hi, I'm", this.firstname);
};
Person.prototype.favoriteColor = "green";
p = new Person("Maria", "Saga");
console.log(p.favoriteColor);
p.introduce();
