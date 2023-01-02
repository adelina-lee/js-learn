function reveal(el) {
    console.log(el);
}

// console.dir(document.body);

// This will display the treasure 
console.dir(document.body.children.forest.children.tree2.children.shruberry.children.treasure);

console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// Shorter version of the above
console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].children.treasure);