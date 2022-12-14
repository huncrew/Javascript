/*
Same thing as with Python, we declare a class, that can inherit from other classes.
The constructor is used to set up the objects variables.
The class has methods.
An instance of the class is created, and this instance is an object, with it's own variables and methods.
*/
class Amphibian {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
        this.resting = true;
    }
    sleep() {
        this.resting = !this.resting;
    }
    sleepStatus() {
        console.log(this.resting);
    }
    evolve() {
        console.log('The amphibian has developed lungs');
    }
    getSelfInfo() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
swimmer = new Amphibian();
swimmer.evolve();
swimmer.sleepStatus()
swimmer.sleep()
swimmer.sleepStatus()
swimmer.getSelfInfo()
/*
INHERITANCE.. Mammal will inherit the methods and data from Amphibian, the evolve function still runs.
Super in the constructor allows me to access super-class variables.
Super when calling a method, simply calls the super class methods.
*/
class Mammal extends Amphibian { 
    constructor(age, weight) {
        super(age, weight);
        this.strength = 0;
    }
    sleep() {
        super.sleep();
        super.sleepStatus();
        console.log('Mammal has successfully slept.')
    }
    ventureInland() {
        console.log('Mammal heads in-land');
    }
    getSelfInfo() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
mouse = new Mammal(5, 50);
mouse.evolve();
mouse.getSelfInfo()
/*
ENCAPSULATION.. methods derived from classes are easy to use, and we don't need to see the code...
'a' becomes an instance of the string class, which has methods, I can't see them but I can use them.
I FUCKING LOVE OBJECT-ORIENTATED PROGRAMMING.
*/
let a = "abc".toUpperCase();
console.log(a);

/*
FURTHER INHERITANCE

More on Super - we call super within the constructor so Javascript knows which variables we are 
inheriting from the parent-class, even if super() is empty, letting them know nothing is being inherited,
then I can use 'this' for the variables to be set for the new instance.
*/

class SeaAnimal {
    constructor(hasGills = true, canSwim = true, size = 100, energy = 100) {
        this.hasGills = hasGills;
        this.canSwim = canSwim;
        this.size = size;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -=20;
            console.log('Energy decreased, energy remaining:',this.energy);
        } else if(this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy levels restored, current level:',this.energy);
    }
}
class Amphibiano extends SeaAnimal {
    constructor(hasGills, canSwim, hasLungs = true, laysEggs = true, hasLegs = true, canWalk = true, size, energy, sound = 'croak') {
        super(hasGills, canSwim, size, energy);
        this.hasLungs = hasLungs;
        this.laysEggs = laysEggs;
        this.hasLegs = hasLegs;
        this.canWalk = canWalk;
    }
    checkGills() {
        console.log('checking gills',this.hasGills);
    }
    makeSound() {
        console.log(this.sound);
    }
}
class landMammal extends Amphibiano {
    constructor(hasLungs, hasLegs, hasWarmBlood = true, canWalk, canRun = true, size, energy, sound="deep") {
        super(hasLungs, hasLegs, canWalk, size, energy)
    }
    makeSound() {
        console.log(this.sound);
    }
}
class Cat extends landMammal {
    constructor(hasLungs, hasLegs, canWalk, canRun, canJumpHigh = true, canClimbTrees = true, size, energy, sound="meow") {
        super(hasLungs, hasLegs, canWalk, canRun, size, energy)
    }
    makeSound() {
        console.log(this.sound)
    }
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
}

a = new Amphibiano()
a.checkGills()
/*
IF CONSTRUCTOR IS LEFT OUT OF SUB-CLASS, IT WILL INHERIT ALL CONSTRUCTOR VARIABLES
the instance of the dog sub-class still recognises the parameter and legs variable with no constructor at all.
*/
class Animal {
    constructor(lg) {
        this.legs = lg;
    }
}

class Dog extends Animal {

}

var result = new Dog(4);
console.log(result.legs);


/*
CLASS THAT CREATES AND STORES OBJECTS
*/
/*
Class Shoes that takes shoe information to store in the constructor attributes.
Method to create an instance and store it in an array - createShoe,
Method to find a shoe, find the shoe with the lowest value, and the highest value.
Method to update any instance stored within the objects array of instances.
*/
class Shoes {
    constructor(name, productCode, quantity, valuePerItem) {
        this.name = name;
        this.productCode = productCode;
        this.quantity = quantity;
        this.valuePerItem = valuePerItem;
        this.shoesList = [];
    } // add shoe instance 
    createShoe(name, productCode, quantity, valuePerItem) {
            let shoe = new Shoes(name, productCode, quantity, valuePerItem);
            this.shoesList.push(shoe);
    } // find shoe by name
    findShoe(shoeName) {
        this.shoesList.forEach(element => {
            if (element.name === shoeName) {
                console.log('This is the shoe!', element);
            }
        })
    } // lowest price shoe
    lowestPrice() {
        var lowest = Number.POSITIVE_INFINITY;
        var tmp;
        let shoe = {}
        for (var i=this.shoesList.length-1; i>=0; i--) {
            tmp = this.shoesList[i].valuePerItem;
            if (tmp < lowest) { 
                lowest = tmp;
                shoe = this.shoesList[i];
            }
        }
        console.log('The lowest priced shoe is:', shoe);
    } // highest priced shoe
    highestPrice() {
        var highest = Number.NEGATIVE_INFINITY;
        var tmp;
        let shoe = {}
        for (var i=this.shoesList.length-1; i>=0; i--) {
            tmp = this.shoesList[i].valuePerItem;
            if (tmp > highest) {
                highest = tmp;
                shoe = this.shoesList[i];
            }
        }
        console.log('The highest priced shoe is:', shoe);
    } // update an instance attributes
    editAttributes(name, newName, productCode, quantity, valuePerItem) {
        this.shoesList.forEach(element => {
            if (element.name === name) {
                element.name = newName;
                element.productCode = productCode;
                element.quantity = quantity;
                element.valuePerItem = valuePerItem;
            }
        })
    } // show objects in alphabetical order, does mutate original array
    ascending() {
        this.shoesList.sort((a, b) => a.name.localeCompare(b.name))
    }
    // show all shoe instances within array
    printShoes() {
        console.log(this.shoesList);
    }
}

// create instances
let shoe = new Shoes()
shoe.createShoe('dale', 5, 100, 500);
shoe.createShoe('heels', 6, 200, 600);
shoe.createShoe('alligator', 7, 500, 6000);
shoe.createShoe('red', 8, 100, 800);
shoe.createShoe('leather', 9, 1200, 60);
// instance method calling
shoe.findShoe('alligator');
shoe.lowestPrice();
shoe.highestPrice();
shoe.editAttributes('dale', 'grant', 1000000, 999, 666);
shoe.ascending();
shoe.printShoes();


/*
Capstone number 3
*/

class Employee {
    constructor(salesTarget) {
        this.salesTarget = salesTarget;
        this.salary;
    } 

}

class SalariedEmployee extends Employee {
    constructor(salesTarget) {
        super(salesTarget, salary)
    } 
    
}

