/** 
 * EXAMPLE 1
 * 
 * Try to "declare" finction expression
 */

// IMPORTANT: it is NOT possible to use function expression standalone

/* function() { // Uncaught SyntaxError: function statement requires a name
    console.log("Hello from function expression!"); 
} */

/** 
 * EXAMPLE 2
 * 
 * Assign function expression to the variable
 */

/* const myFunction = function() {}; // varijabla "myFunction" sadrži funkciju kao vrednost

myFunction();

console.log(myFunction()); // undefined

console.log(myFunction); // f () {} => it means that is a function */

/**
 *  EXAMPLE 3
 * 
 * Callback function
 */

/* setTimeout(function() {
    console.log("delayed message");
}, 3000); */


/**
 *  EXAMPLE 4
 * 
 * Callback function (example 2)
 */
/* let i = 0;
setInterval(function() {
    console.log("This message will loop every 3 seconds! Time:", i);
    i+=3;
}, 3000); */

/**
 *  CHALLENGE
 * 
 * Use following built-in functions:
 * setTimeou
 * setInterval
 * clearInterval
 * 
 * You should print to the console ONLY 5 messages with interval 2 seconds:
 * "Here is meesage number 1"
 * "Here is meesage number 2"
 * "Here is meesage number 3"
 * "Here is meesage number 4"
 * "Here is meesage number 5"
 */

/* let i = 1;

const myInterval = setInterval(function() {
    console.log("Here is message number", i);    
    i+= 1;
}, 2000);

setTimeout(function() {
    clearInterval(myInterval);
}, 10000); */















