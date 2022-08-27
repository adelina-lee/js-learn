// Functions
function sayHello() {
    let you = prompt("What's your name?");
    console.log("Hello", you + "!");
}
// sayHello();

// Function in variable
let varContainingFunction = function() {
    let varInFunction = "I'm a function.";
    console.log("hi there!", varInFunction);
};

// Practice exercise 6.1
var1 = 2;
var2 = 5;

function addParam(var1, var2) {
    console.log(var1 + var2);
}
addParam();
addParam(1, 2);

// Practice exercise 6.2
descriptions = ["pretty", "fun", "funny", "dark"];
function describe() {
    // let name = prompt("What's your name?");
    let value = Math.floor(Math.random() * descriptions.length);
    console.log(descriptions[value]);
}
describe();

// Parameters and arguments
function tester(para1, para2) {
    return para1 + " " + para2;
}
const arg1 = "argument 1";
const arg2 = "argument 2";
tester(arg1, arg2);

function addTwoNumbers(x, y) {
    console.log(x + y);
}
addTwoNumbers(3, 4);
addTwoNumbers(12, -90);

// Arrow functions
// (param1, param2) => body of the function;
// If there are no parameters:
// () => body of the function;
// For one parameter (no parentheses):
// param => body of the function;
// Multiline function with 2 parameters:
// (param1, param2) => {
//    
// };

let doingArrowStuff = x => console.log(x);
doingArrowStuff("Great");

let addTwoNumbers2 = (x, y) => console.log(x + y);
addTwoNumbers2(5, 3);

let sayHi = () => console.log("hi");
sayHi();

let arr = ["squirrel", "alpaca", "buddy"];
arr.forEach(e => console.log(e));

// Spread operator
let spread = ["so", "much", "fun"];
let message = ["JavaScript", "is", ...spread, "and", "very", "powerful"];
console.log(message);

arr = [5, 9];
addTwoNumbers(...arr);

function addFourNumbers(x, y, z, a) {
    console.log(x + y + z + a);
}
arr = [5, 9];
arr2 = [6, 7];
addFourNumbers(...arr, ...arr2);

// Rest parameter
function someFunction(param1, ...param2) {
    console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?")

// Returning function values
let result = addTwoNumbers(4, 5);
console.log(result);
// Use this to remove undefined:
function addTwoNumbers(x, y) {
        return x + y;
}

let resultsArr = [];
for (let i = 0; i < 10; i ++) {
    result = addTwoNumbers(i, 2*i);
    resultsArr.push(result);
}
console.log(resultsArr);

// Practice exercise 6.4
let loopArr = [];
for (i = 0; i < 10; i++) {
    val1 = i*5;
    val2 = i*i;
    result = addTwoNumbers(val1, val2);
    loopArr.push(result);
}
console.log(loopArr);

// Returning with arrow functions
let addTwoNumbers3 = (x, y) => x + y;
result = addTwoNumbers3(12, 15);
console.log(result);

/* let addTwoNumbers = (x, y) => {
    console.log("Adding...");
    return x + y;
} */

// Variable scope in functions
function testAvailability(x) {
    console.log("Available here:", x);
}
// x will be undefined for the below statements
/* testAvailabiity("Hi!");
console.log("Not available here:", x) */

function testAvailability2() {
    let y = "I'll return";
    console.log("Available here:", y);
    return y;
}
let z = testAvailability2();
console.log("Outside the function:", z)
// console.log("Not available here:", y)

// Immediately invoked function expression
// Error:
/* (function () {
    console.log("IIFE!");
})();

(()=>{
    console.log("run right away");
})(); */

// Recursive functions
function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
}
getRecursive(3);

// Anonymous functions
let functionVariable = function() {
    console.log("Not so secret though.");
};
functionVariable();
