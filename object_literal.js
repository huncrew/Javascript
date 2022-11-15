/*
Think about it, the below is still an object, it's a block of code that holds data and methods in one place.
The 'this' keyword just accesses the objects variables.
*/
let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        var calculation = this.shoes * this.stateTax;
        console.log('PRICE:', calculation);
    }
}       
purchase1.totalPrice()
/*
For an object literal, we must use the Object.create notation.
*/
shoePurchase = Object.create(purchase1);
console.log(shoePurchase.shoes);