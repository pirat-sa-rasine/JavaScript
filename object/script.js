/* let myObject;

myObject = {
    a: 10,
    b: "abc",
};

console.log(myObject);

myObject.a = 15;

console.log(myObject);

myObject.c = true;

console.log(myObject);

delete myObject.b;

console.log(myObject);

console.log(myObject.a); */


/**
 *  CHALLENGE 1
 * 
 * Create variable callaed "myPost"
 * Initial value should be {}
 * Add property called "postTitle" and value "Object is reference type"
 * Add one more property "postLikes" with value 0
 * Add third prooperty "shared" and sets its value to "false"
 * Increase value of the "postLikes" by 1
 * Delete property "shared"
 */

/* 
let myPost;
myPost = {};

myPost.postTitle = "Object is reference type";
myPost.postLikes = 0;
myPost.shared = false;

myPost.postLikes +=1;

console.log(myPost);

delete myPost.shared;

console.log(myPost); */


/** 
 * CHALLENGE 2
 * 
 * Create variable "myObject" and add property "a" - 10.
 * Create another variable "copyOfMyObject" and its value should be "myObject".
 * Add new property "b" with value - false to the "copyOfMyObject".
 * Print to the console "myObject" and "copyOfMyObject" and interpret results.
 */

/* let myObject = {
    a: 10,
};

let copyOfMyObject = myObject;

copyOfMyObject.b = false;

console.log("myObject", myObject);

console.log("copyOfMyObject", copyOfMyObject); */

/* const myObject = {
    a: 10,
    b: null,
    c: 25,
};

console.log('myObject["b"]', myObject["b"]);

const propertyName = "c";

console.log('myObject["c"] === myObject[propertyName] =>', myObject[propertyName]);

myObject["new" + "Property" + "Name"] = "value for dynamically computed property name"; 

console.log(myObject); */

/** 
 * CHALLENGE 3
 * 
 * Create object "objectWithNestedObject" with initial value {}.
 * Add property "nestedObject" with inital value {}.
 * Add property "a" with value "null" to "nestedObject". Use dot notation
 * Add property "b" with value "true" to "nestedObject". Use bracket notation.
 * Create new variable with property name
 */

/* let objectWithNestedObject = {};

objectWithNestedObject.nestedObject = {};

objectWithNestedObject.nestedObject.a = null;

const newPropertyName = "b";

objectWithNestedObject.nestedObject[newPropertyName] = true;

console.log(objectWithNestedObject); */









