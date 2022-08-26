// Creating arrays
arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];
arr3 = new Array(10);
arr4 = [10];
console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];
console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

// Accessing elements
cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

// Overwriting elements
cars[0] = "Tesla";
console.log(cars[0]);
console.log(cars);

// Length property
colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];
console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of empty array:", emptyArray.length);

numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log("numbers", numbers);

// Practice Exercise 3.1
shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length);
shoppingList[1] = "Bananas";
console.log("Shopping List: ", shoppingList);

// Array Methods
// Adding and Replacing Elements
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(favoriteFruits);

// Splice method
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
// arrOfShapes.splice(2, 0, "square", "trapezoid"); // Number of array[2] to start insert, number of elements to delete
console.log(arrOfShapes);

arrOfShapes.splice(2, 2, "square", "trapezoid");
console.log(arrOfShapes);

// Concat method
// Add an array to another array
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
arr8.pop();
console.log(arr8);
arr8.shift();
console.log(arr8);
arr8.splice(1, 3);
console.log(arr8);
delete arr8[0];
console.log(arr8);

// Finding elements using find()
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function (e) { return e === 6 });
let findValue2 = arr8.find(e => e === 10); // returns undefined
console.log(findValue, findValue2);

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10); // returns -1
console.log(findIndex, findIndex2);
let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex3);

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog); // returns 4

// Sorting
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

let ages = [18, 72, 33, 56, 40];
ages.sort();
console.log(ages);

// Reversing
names.reverse();
console.log(names);

ages.reverse();
console.log(ages);

// Practice exercise 3.2
shoppingList2 = [];
shoppingList2 = ["Milk", "Bread", "Apples"];
shoppingList2.splice(1, 1, "Bananas", "Eggs");
shoppingList2.pop();
console.log(shoppingList2);
shoppingList2.sort();
findIndex4 = shoppingList2.indexOf("Milk");
console.log(findIndex4);
shoppingList2.splice(1, 0, "Carrots", "Lettuce");
shoppingList3 = ["Juice", "Pop"];
newShoppingList = shoppingList2.concat(shoppingList3);
finalShoppingList = newShoppingList.concat(shoppingList3);
console.log(finalShoppingList);

// Multidimensional arrays
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3]; // let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arrOfArrays);

let value1 = arrOfArrays[0][1];
console.log(value1);
let value2 = arrOfArrays[2][2];
console.log(value2);

arrofArraysofArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
console.log(arrofArraysofArrays);
let middleValue = arrofArraysofArrays[1][1][1];
console.log(middleValue);

// Practice exercise 3.3
practiceArray = [1, 2, 3];
multipleArrays = [practiceArray, practiceArray, practiceArray];
let practiceValue = multipleArrays[2][1];
console.log(practiceValue);

// Objects in JavaScript
let arr9 = [0, 1, 2];
console.log(typeof arr9);

let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua",
    age: 3,
    burglarBiter: true
};

let dogColor1 = dog["color"];
let dogColor2 = dog.color;
console.log(dogColor1, dogColor2);

dog["color"] = "blue";
dog.weight = 2.3;
console.log(dog);

dog["age"] = "three";

let variable = "age";
console.log(dog[variable]);

variable = "breed";
console.log(dog[variable]);

dog[variable] = "dachshund";
console.log(dog["breed"]);

// Practice exercise 3.4
myCar = {
    make: "Toyota",
    model: "Alphard",
    year: 2022,
    used: false,
    color: "White"
}

variable = "color";
myCar[variable] = "Black";

variable = "forSale"; // Adds new variable into myCar
myCar[variable] = true;

console.log(myCar.make, myCar.model);
console.log(myCar.forSale);

// Objects in objects
let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}

// Accessing the array
company.address.zipcode = "33117";
company["address"]["number"] = "100";

// Arrays in objects
company = {
    companyName: "Healthy Candy",
    activities: [
        "food manufacturing", "improving kids' health", "manufacturing toys"
    ],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}

let activity = company.activities[1];
console.log(activity);

// Objects in arrays
let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
},
{
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
}]

let streetName = addresses[0].street;
console.log(streetName);

// Objects in arrays in objects
company = {
    companyName: "Healthy Candy",
    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida",
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas",
    }],
    yearOfEstablishment: 2021
}

streetName = company.address[0].street;

// Practice exercise 3.5
let people = {
    friends: [{
        firstName: "John",
        lastName: "Doe",
        id: 1,
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        id: 2,
    },
    {
        firstName: "Peter",
        lastName: "Pan",
        id: 3,
    },
    ]
}

friends = people.friends;
console.log(friends);

// Chapter Projects
// Manipulating an array
const theList = [
    'Laurence', 
    'Svekis', 
    true, 
    35, 
    null, 
    undefined,
    { test: 'one', score: 55 }, 
    ['one', 'two']
];

theList.shift();
theList.pop();
theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.push("LAST");
console.log(theList);

// Company product catalog
inventory = [

]
products = [
    {
        name: "Pen",
        model: "Pilot",
        cost: 100,
    },
    {
        name: "Pencil",
        model: "Staedtler",
        cost: 100,
    },
    {
        name: "Eraser",
        model: "Faber Castel",
        cost: 100,
    },
]
variable = products;

variable = "products"; 
inventory[variable] = products;
console.log(inventory);

console.log(inventory.products[2]);