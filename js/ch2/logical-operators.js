// Logical Operators
let x = 1;
let y = 2;
let z = 3;

// And (11 = true, 10 = false)
console.log(x < y && y < z); // true
console.log(x > y && y < z); // false

// Or
console.log(x > y || y < z); // true
console.log(x > y || y > z); // false

// Not
x = false;
console.log(!x);

x = 1;
console.log(!(x < y));