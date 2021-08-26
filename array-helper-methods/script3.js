/* const a = [1, 2, 3];
const b = [1, 2, 3];

// console.log(a === b);

const c = [-1, 'abc', 3];
const d = [1, 2, 3, null];
const e = [3, 2, 1]; */

// CHALLENGE 1
/**
 * Create a function "areArraysEqual" with two parameters "arrayOne"
 * and "arrayTwo". 
 * 
 * It two arrays are equal return "true" otherwise retrun "false"
 */

//  SOLUTION 1
/* function areArraysEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length)
        return "Arrays are not equal";

    if (arrayOne.every((elem, index) => elem === arrayTwo[index])) {
        return "Arrays are equal"
    } 
    
    return "Arrays aren't equal";
} */

// SOLUTION 2

/* const arraysAreEqual = (arrayOne, arrayTwo) => 
                            arrayOne.length === arrayTwo.length && 
                            arrayOne.every((elem, index) => elem === arrayTwo[index]) */

// console.log(areArraysEqual(a, e));

// IMPORTANT SECTION !

/* const f = a;

// console.log(f); // [1, 2, 3];

// console.log(a === f); // true -> BUT equal by POINTERS not BY VALUES! 
console.log(areArraysEqual(a, f)); // Arrays are equal


console.log(arraysAreEqual(a, b)); // Arrays are equal
console.log(arraysAreEqual(a, e)); // Arrays are not equal

f.push(null);

console.log(areArraysEqual(a, b)); // Arrays are NOT equal !  */

// CHALLENGE 2

/**
 * Create a function "elementFound" with two parameters "inputArray" 
 * and "searchElement".
 * If "searchElement" is found in the "inputArray" - return "true"
 * otherwise retrun "false"
 */

/* const transport = ["Bus", "Car", "Bicycle", "Airplane"];

const elementFound = (arr, item) => (arr.find(elem =>  elem === item) === undefined ? "Item doesn't exist" : "Item found");
// const elementFound = (arr, item) => arr.find(elem =>  elem === item);

console.log(elementFound(transport, "Airplane")); */

/**
 * helper method - include()
 */

/* const myNumbers = [5, 10, 3, 15];

console.log(myNumbers.includes(-5)); // false
console.log(myNumbers.includes(5)); // true */

/* const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"],
];

const fruits = [
    { title: "Orange", quantity: 10},
    { title: "Apple", quantity: 5},
    { title: "Banana", quantity: 34},
];

const primitiveTypesArray = [
    25, "abc", null, undefined, true
];

const elementIsIncluded = (arr, searchElement) => {
    if (typeof searchElement !== "object") {
        return arr.includes(searchElement);
    }

    if (typeof searchElement === "object") {
        return arr.map(element => JSON.stringify(element)).includes(JSON.stringify(searchElement));
    }
};


// console.log(primitiveTypesArray.map(elem =>  elem).includes(2));

console.log(elementIsIncluded(primitiveTypesArray, 1)); // false
console.log(elementIsIncluded(primitiveTypesArray, 25)); // true

console.log("---------------------------");

console.log(elementIsIncluded(tags, ["css", "flexbox"])); // true
console.log(elementIsIncluded(tags, ["web-browser", "html"])); // false

console.log("---------------------------");

console.log(elementIsIncluded(fruits, { title: "Apple", quantity: 25})); // false
console.log(elementIsIncluded(fruits, { title: "Banana", quantity: 34})); // true

console.log("---------------------------"); */

/**
 * CHALLENGE 3
 * 
 * Create a function "pushIfUnique" with two parameters
 * "inputArray" and "newElement"
 * 
 * If "inputArray" already contains "newElement" print
 * "{newElement} is already in the array" to the console.
 * 
 * Otherwise push "newElement" to the "inputArray"
 * 
 * NOTE: we assume that "inputArray" may contain only primitive
 * variable types
 */

/* const myNumbers = [123, 50, 27];

const pushUnique = (inputArray, newElement) => {
    if (myNumbers.includes(newElement)) {
        console.log(newElement, "is in the array");
    } else {
        myNumbers.push(newElement);
    }
};

pushUnique(myNumbers, 123);
pushUnique(myNumbers, 12);
pushUnique(myNumbers, 12);

console.log(myNumbers); */






















