/*
I think simply, the Javascript engine has some built in classes with methods, some of these classes have constructors,
and I can create an instance of them, such as Date.
The classes like Math, I suspect are object literals, with just methods, and so can't have instances created.
*/
sandwich = new Date();
console.log(sandwich);

/*
Creating a custom constructor...
strangely a course taught to create classes this way! but it seems to be a 'constructor function'
*/
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}
shitfaced = new Icecream('cock');
shitfaced.meltIt()
