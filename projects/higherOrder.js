// NOW REPLICATING THE .FILTER FUNCTION WITH MY OWN FUNCTION BEING PARSED TO IT.
// THE FUNCTION WILL CHECK EACH ARRAY MEMBER AS A BOOLEAN, IF ITS LENGTH IS 6, IT WILL 
// USE .PUSH TO PUSH TO NEW ARRAY.
const arrayWords = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'workin', 'veryyy', 'harddd', 'sucess']
let myFilterFunction = arr => fn => { // this function is replicating what the above .map(multiTwo) function is doing.
    // its also a closure function, the 'fn' being a function within the function.
    const arrayAfterFilter = [];
    for (let i = 0; i < arr.length; i++) {
       if (fn(arr[i])) {
        arrayAfterFilter.push(arr[i])
       }
    }
    return arrayAfterFilter;
}
const flteredArray = myFilterFunction(arrayWords)(item => item.length == 6);
console.log('list of filterd words number 2', flteredArray)