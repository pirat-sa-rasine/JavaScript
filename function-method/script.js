/**
 *  EXAMPLE 1
 * 
 * Simplest function in JavaScript
 */

/* function myFunction() {}

console.log("myFunction:", myFunction); */

/* myFunction();

const functionResult = myFunction();

console.log(functionResult); // undefined

console.log(myFunction()); // undefined

console.log(myFunction(10, true));  // undefined !!!  */


/** 
 * EXAMPLE 2    
 * Parameters of the function
 */

/* function myFunction(a, b) {
    console.log(a);
    console.log(b);
}

myFunction(10, 5); // 10 5

myFunction(); // undefined undefind ! ! !

myFunction("abc"); // abc, undefined

// Q: What "myFunction" RETURNS in all function calls? - A: undefined
// prove:

console.log('Q: What "myFunction" RETURNS in all function calls? - A:', myFunction(12, 34));
 */
// reason? there is no "return" keyword inside function body

/**
 *  EXAMPLE 2
 * 
 * Add "return"
 */

/* function sum(a, b) {
    return a + b;
}

sum(5, 11);  // function returns 16 but we see nothing in the console

console.log(sum(3, 17)); // 20

console.log(sum("abc", 4)); // abc4

console.log(sum()); // NaN */

/**
 *  CHALLENGE 1
 * 
 * Create function called "mult" an it will have 3 parameters.
 * Create new variable and assign to it result of multiplication of all 3 parameters
 * Print to the console result.
 * Do not use "return". 
 */

/* 
function mult(a, b, c) {
    let result = a * b * c;
    console.log(result);
}

mult(5, 2, -1); // -10

mult(3, 2, "abc"); // NaN

mult(); // NaN

console.log(mult(3, 2, 4)); // 24 is printed inside of the function and function returns "undefined"
 */


/* function outerFunction(a, b) {
    function innerFunction(c) {
        return c * c;
    }
    
    const result = innerFunction(a + b);

    console.log(result);
}

outerFunction(3, 5); // 64 */















