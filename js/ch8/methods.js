// Built-in Javascript Methods
/* let s = "Hello";
console.log(
    s.concat(" there!")
        .toUpperCase()
        .replace("THERE", "you")
        .concat(" You're amazing!")
); */

// Global methods
let x = 7;
console.log(Number.isNaN(x));

// decodeUri() and encodeUri()
let uri = "https://www.example.com/submit?name=maaike van putten";
let encoded_uri = encodeURI(uri);
console.log("Encoded:", encoded_uri);
let decoded_uri = decodeURI(encoded_uri);
console.log("Decoded:", decoded_uri);

// Filtering an array
let arr = ["squirrel", 5, "Tjed", new Date(), true];

function checkString(element, index) {
    return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

// Map array
arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);

// Split
let result = "Hello Javascript";
let arr_result = result.split(" ");
console.log(arr_result);

// Split using comma
let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);

// Convert array to string
let letters = ["a", "b", "c"];
x = letters.join();
console.log(x);
x = letters.join("-");
console.log(x);

// Search
let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);