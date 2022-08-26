// Chapter 2
/* firstname = "Adelina";
x = 2;

firstname = "Edward";
x = 7; */

let firstname = "Maria";
firstname = "Jacky";

/* let and var is used for variables that may 
have new value assigned somewhere. However, 
var has global scope & let has block scope. */
let nr1 = 12;
var nr2 = 8;
const PI = 3.14159;

/* If you remove the comment on line 21,
it will produce an error. */ 
const someConstant = 3;
// someConstant = 4;

let language = "Javascript";
let message = `Let's learn ${language}`; 
console.log(message);

// Escape Characters
let str = "Hello, what's your name? Is it \"Mike\"?";
console.log(str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log(str2);

// Line Break
let str3 = "New \nline.";
let str4 = "I'm containing a backslash: \\!";
console.log(str3);
console.log(str4);

// Number
let intNr = 1;
let decNr = 1.5;
let expNr = 1.4e15;
let octNr = 0o10; // decimal version would be 8
let hexNr = 0x3E8; // decimal version would be 1000
let binNr = 0b101; // decimal version would be 5

let intNr2 = 3434;
let intNr3 = -111;
let decNr2 = 45.78;
let binNr2 = 0b100; // decimal version would be 4

let bigNr = 90071992547409920n;

/* The line below will cause an error because 
BigInt cannot be mixed with Number */
// let result = bigNr + intNr;

// Boolean
let bool1 = false;
let bool2 = true;

let objectIsDeleted = false;
let lightIsOn = true;

// Symbol
let string1 = "JavaScript is fun!";
let string2 = "JavaScript is fun!";
console.log("These two strings are the same:", string1 === string2)

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two symbols are the same:", sym1 == sym2)

// Undefined
let unassigned;
console.log(unassigned);
let terribleThingToDo = undefined;

// null
/* Set a variable's value to null or empty if it's unknown. */
let empty = null;
let lastName;
console.log("Same undefined:", lastName === terribleThingToDo);

let betterOption = null;
console.log("Same null:", lastName === betterOption);

// Analyzing and modifying data types
testVariable = 1;
variableTypeTest1 = typeof testVariable;
variableTypeTest2 = typeof(testVariable);
console.log(variableTypeTest1);
console.log(variableTypeTest2);

let strTest = "Hello";
let nrTest = 7;
let bigNrTest = 1234567891234n;
let boolTest = true;
let symTest = Symbol("unique");
let undefTest = undefined;
let unknownTest = null;
console.log("str", typeof strTest);
console.log("nr", typeof nrTest);
console.log("bigNr", typeof bigNrTest);
console.log("bool", typeof boolTest);
console.log("sym", typeof symTest);
console.log("undef", typeof undefTest);
console.log("unknown", typeof unknownTest);

// Converting data types
let nr4 = 2;
let nr5 = "2";
console.log(nr4 * nr5); // This returns the multiplication
console.log(nr4 + nr5); // This concatenates two strings together

let nrToStr = 6;
nrToStr = String(nrToStr); // Converts a variable to type String
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr); // Converts a variable/String to type Number
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true"; // Converts a variable/String to a Boolean
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr2 = "";
strToNr2 = Number(strToNr2);
console.log("empty string", strToNr2, typeof strToNr2);

let strToNr3 = "hello";
strToNr3 = Number(strToNr3);
console.log(strToNr3, typeof strToNr3);

// Boolean
let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);

// ----- Practice Exercise 2.1 -----
let str5 = 'Laurence';
console.log(str5, typeof str5);
let str6 = "Svekis";
console.log(str6, typeof str6);
let val1 = undefined;
console.log(val1, typeof val1);
let val2 = null;
console.log(val2, typeof val2);

// Addition
let addNr1 = 12;
let addNr2 = 14;
let addResult1 = addNr1 + addNr2;
console.log(addResult1);

let addStr1 = "Hello ";
let addStr2 = "addition";
let addResult2 = addStr1 + addStr2;
console.log(addResult2);

// ----- Practice Exercise 2.2 -----
myName = "Adelina";
myAge = "26";
mySkills = true;
console.log("Hello, my name is " + myName + ", I am " + myAge + " years old and I can code Javascript: " + mySkills + ".");

// Subtraction
let nr6 = 20;
let nr7 = 4;
let str1 = "Hi";
let nr8 = 3;
let result1 = nr6 - nr7;
let result2 = str1 - nr8;
console.log(result1, result2);

// Multiplication
let result3 = nr6 * nr7;
let result4 = str1 * nr8;
console.log(result3, result4);

// Division
let result5 = nr6 / nr7;
console.log(result5);

// Exponentiation
let result6 = nr6 ** nr7;
console.log(result6);

// Modulus
let modNr1 = 10;
let modNr2 = 3;
let modResult1 = modNr1 % modNr2;
console.log(`${modNr1} % ${modNr2} = ${modResult1}`);

let modNr3 = 8;
let modNr4 = 2;
let modResult2 = modNr3 % modNr4;
console.log(`${modNr3} % ${modNr4} = ${modResult2}`);

let modNr5 = 15;
let modNr6 = 4;
let modResult3 = modNr5 % modNr6;
console.log(`${modNr5} % ${modNr6} = ${modResult3}`);

// Unary Operators (++ and --)
let incNr1 = 4;
incNr1++;
console.log(incNr1);

let incNr2 = 4;
incNr2--;
console.log(incNr2);

let incNr3 = 2;
console.log(incNr3++);
console.log(incNr3);

let incNr4 = 2;
console.log(++incNr3);

let oNr1 = 4;
let oNr2 = 5;
let oNr3 = 2;
console.log(oNr1++ + ++oNr2 * oNr3++);

// ----- Practice Exercise 2.3 -----
// a^2 + b^2 = c^2

// Assignment Operators
let x = 2;
console.log(x);
x += 2;
console.log(x);
x -= 2;
console.log(x);
x *= 6;
console.log(x);
x /= 3;
console.log(x);
x **= 2;
console.log(x);
x %= 3;
console.log(x);

// ----- Practice Exercise 2.4 ----- 
let a = 1;
let b = 2;
let c = 3;
// Add b to a
console.log(b + a);
// Divide a by c
console.log(a/c);
// Replace value of c with modulus of c and b
c = c % b;
console.log(c);
// Print all numbers
console.log("a = " + a + "\n" +
            "b = " + b + "\n" +
            "c = " + c + "\n");