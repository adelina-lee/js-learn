// While loops
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;

while (notFound && someArray.length > 0) {
    if (someArray[0] === "Louiza") {
        console.log("Found her!");
        notFound = false;
    } else {
        someArray.shift();
    }
}

// Fibonacci sequence
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];

while (fibonacciArray.length > 25) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}

// do while loops
/* let number;
do {
    number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100)); */

// Practice exercise 5.2
let counter = 0;
let step = 5;
do {
    console.log(counter);
    counter += step;
} while(!(counter <= 100));

// for loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(i);
}

for (let i = 0; i < 100; i = i + 2) {
    arr.push(i);
}

// Practice Exercise 5.3
const myWork = [];
for (let x = 1; x < 10; x++) {
    let stat = x % 2 ? true : false;
    let temp = {
        name: `Lesson ${x}`, status: stat
    };
    myWork.push(temp);
}
console.log(myWork);

// Nested loops
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
    arrOfArrays.push([]);
    for (let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j);
    }
}
console.log(arrOfArrays);

// Practice exercise 5.4
let myTable = [];
let rows = 3;
let cols = 3;
counter = 0;

for (let x = 0; x < rows; x++) {
    tempTable = [];
    for (let y = 0; y < cols; y++) {
        counter++;
        tempTable.push(counter);
    }
    myTable.push(tempTable);
}
console.table(myTable);

// Loops and arrays
let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let i = 0; i < names.length; i++) {
    console.log("hello " + names[i]);
}

// Check name starting from string M
for (let i = 0; i < names.length; i++) {
    if(names[i].startsWith("M")) {
        delete names[i];
        continue;
    }
    names[i] = "hello " + names[i];
}
console.log(names);

// Practice exercise 5.5
let gridArray = [];
const cells = 64;
counter = 0;
rowArray = [];