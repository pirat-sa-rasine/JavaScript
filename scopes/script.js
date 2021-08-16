/**
 *  EXAMPLE 1
 * 
 * Global scope
 */

/* var a = 10;
let b = true;

console.log(a); // 10
console.log(window.a); // 10

console.log(b); // true
console.log(window.b); // undefined

const c = "abc";

console.log(c); // "abc"
console.log(window.c); // undefined

function myFunction(a) {
    console.log(a);
}

console.log(myFunction); // ƒ myFunction(a) { console.log(a); }

console.log(window.myFunction) //  ƒ myFunction(a) { console.log(a); }

/* varijable a, b i c su globalne varijable kao i funkcija "myFunction" */

/* myFunction(); */

/**
 *  EXAMPLE 2
 * 
 * Function scope
 */

/* let e;

function myFunction(a, b) {
    const c = true;
    console.log(c); // true
    // console.log(d); Uncaught ReferenceError: d is not defined at myFunction
    console.log(e); // undefined

    console.log(a, b); // values of the parameters "a" and "b"
}

myFunction(); */

// console.log(c); Uncaught ReferenceError: c is not defined

/**
 *  EXAMPLE 3
 * 
 *  Scope chain
 */

/* function sum(a, b) {
    function mult(a, b) {
        return a * b;
    }
    mult(a, b);
    return a + b;
}

const result = sum(10, 5);
console.log(result); */


/**
 *  EXAMPLE 4
 * 
 *  Undeclared variable
 */

/* a = 10; // variable "a" will be automatically declared in the global scope

console.log(a); 

const myFunction = function() {
    b = 5; // variable "b" will be automatically declared in the global scope, NOT function scope
    console.log(b); // 5
}

myFunction();

console.log(b); */ // 5

/**
 *  EXAMPLE 5
 * 
 * Strict mode
 */

/* "use strict";

// a = 10;  Uncaught ReferenceError: a is not defined

function myFn() {
    b = 5; // Uncaught ReferenceError: b is not defined at myFn
}

myFn(); */

/**
 *  EXAMPLE 6
 * 
 * Strict mode in the function
 */

/* a = 10;

function myFn() {
    "use strict";  // apply only inside function
    b = 5; // Uncaught ReferenceError: b is not defined at myFn    
}

myFn(); */


/**
 *  CHALLENGE 1
 * 
 * Function scopes
 */

/* const b = 2;
let d = 15;

function myFn1(a) {
    let b;
    let d = 10;
    myFn2(b);
}

function myFn2(a) {
    let c = 5;
    console.log(a, b, c, d);
}

myFn1(); */ 
/* 
a = undefined
b = 2
c = 5
d = 15 */

/**
 *  CHALLENGE 2
 * 
 *  Callback function
 * What will be logged to the console?
 */
/* 
setTimeout(function myFn() {
    console.log("HEllo from myFn function");
}, 2000);

myFn(); */

// ANSWER
// uNCOUGHT rEFERENCEeRROR: MYfN IS NOT DEFINED
// after 2 seconds
// "Hello from myFn function"



































