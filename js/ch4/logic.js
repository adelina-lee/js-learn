// if and if else statements
let rain = true;

if(rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

let hobby = "dancing";

if(hobby == "coding"){
    console.log("** I love coding too! **")
} else {
    console.log("** Can you teach me that? **")
}

// Practice exercise 4.1
fat = false;
console.log(fat);

if(fat == true) {
    console.log("** Eat healthily and exercise regularly. **")
} else if(fat!= true) {
    console.log("** You still need to eat healthily and exercise regularly. **")
}

// Conditional ternary operators
// operand1 ? operand2 : operand3;
// if *operand1*, then *operand2*, else *operand3*
age = 10;
let access = age < 18 ? console.log("denied") : console.log("allowed");

// Practice Exercise 4.3
ID = true;
access = (ID == true) ? console.log("allowed") : console.log("denied");

// Switch statements
activity = "Lunch";

switch(activity) {
    case "Get up":
        console.log("It is 6.30AM");
        break;
    case "Breakfast":
        console.log("It is 7:00AM");
        break;
    case "Drive to work":
        console.log("It is 8:00AM");
        break;
    case "Lunch":
        console.log("It is 12:00PM");
        break;
    case "Drive home":
        console.log("It is 5:00PM");
        break;
    case "Dinner":
        console.log("It is 6.30PM");
        break;
    default: // default value
        console.log("I cannot determine the current time.");
        break;
}

// Combining cases
grade = "A";

switch(grade){
    case "F":
    case "D":
        console.loog("You've failed!");
        break;
    case "C":
    case "B":
        console.log("You've passed!");
        break;
    case "A":
        console.log("Nice!");
        break;
    default:
        console.log("I don't know this grade.");
}

