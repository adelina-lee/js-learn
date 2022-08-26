// Check equal values, not datatype
let x = 5;
let y = "5";
// Equal
console.log(x == y); // true
// Not equal
console.log(x != y); // false

// Check datatype
x = 5;
y = "5";
console.log(x === y); // false
console.log(x !== y); // true

// Greater than, smaller than
x = 5;
y = 6;
console.log(x, y);
console.log(y > x); // true
console.log(x > y); // false
console.log(y > y); // false
console.log(y >= y); // true
console.log(y < x); // false
console.log(x < y); // true
console.log(y < y); // false
console.log(y <= y); // false
