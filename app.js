/****** HOISTING EXERCISES ******/
/*
 // Steps 1 - 4
 name = 'Andrew';
 var name;
 console.log(name);  // Should log Andrew due to `var` hoisting

*/

/*
// Steps 5 - 6 
name = 'Andrew';
let name;
console.log(name); // Should throw an error

*/

/*
// Steps 8 - 9
setName(); // Should log Andrew since functions are hoisted to the top

function setName() {
    var name = 'Andrew';
    console.log(name);
}
*/

/*
// Steps 10 - 11
let avg = average(5,9);
console.log(avg); // 7; The value is created after the function runs

function average(a, b) {
//    console.log(avg); // Will throw an error since average is not yet given a value
    return (a + b) / 2;
}
*/


/****** SCOPING EXERCISES ******/