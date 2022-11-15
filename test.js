function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable);
        console.log(innerVariable);
    }
}
const functionVariable = outerFunction('Foo');
console.log(functionVariable())
// functionVariable('bar');