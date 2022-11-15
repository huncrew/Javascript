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

