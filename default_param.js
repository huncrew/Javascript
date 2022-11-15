//normal function
function noDefaultParams(number) {
    console.log('Result:', number * number)
}
/*
With a default parameter, I write a parameter that can be overridden, but also is assigned something to start with
'Defensive programming'
*/
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}
withDefaultParams()
/*
An example with a class
*/
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
