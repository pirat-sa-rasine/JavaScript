/**
 *  EXAMPLE 1 - Variable declaration
 */

/* var a;

console.log(a); */

/* 
console.log(b); // Uncaught ReferenceError: b is not defined 
*/

/* let c; */


/** 
 * EXAMPLE 2 - "const"
 */


/* 
const d; 
console.log(d); // Uncaught SyntaxError: missing = in const declaration 
*/

/**
 *  EXAMPLE 3 - "let"
 */

/* let myNumber = 10;

console.log(myNumber);

let myString;

myString = "Hello from String";

console.log(myString); */


/**
 *  EXAMPLE 4 - "const"
 */

/* const myBoolean = true;

console.log(myBoolean);

myBoolean = false; // Uncaught TypeError: invalid assignment to const 'myBoolean'

const myBoolean = false; // Uncaught SyntaxError: redeclaration of const myBoolean */


/**
 *  CHALENGE 1
 * 
 * Declare variable "myObject" and assign value {}.
 * Print this variable to the console
 * NOTE: variable "myObject" will NOT be reassigned in the future
 */
/* 
const myObject = {};

console.log(myObject);

myObject = {} // Uncaught TypeError: invalid assignment to const 'myObject' */

/**
 *  CHALLENGE 2
 * Declare "x" and assign value 10 to it.
 * Declare "y" and assign value true to it
 * Declare "myObject" and assign object with two name-value pairs
 * Declare "anootherObject".
 * later assign value to it - object with three name-value pairs
 */

/* let x = 10;

const y = true;

const myObject = {
    a: x,
    b: y,
};

console.log(myObject);

let anotherObject;

x= 20;
anotherObject = {
    newA: x,
    b: y,
    c: myObject,
};

console.log(anotherObject); */












