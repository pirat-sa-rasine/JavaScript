/**
 *  EXAMPLE 1
 * 
 * Regular "for" loop
 *
 */

/* for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // Uncaught ReferenceError: i is not defined [is not available in the global scope] */


/**
 *  EXAMPLE 2
 * 
 *  Regular "for" loop with Array
 * NEVER USE THIS KIND OF LOOPS WITH ARRAYS
 */

/* const myArr = [0, true, "abc", 50, null];

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
} */

/**
 *  EXAMPLE 3
 * 
 *  Regular "while" loop
 */

/* let i = 0;

while (i < 5) {
    console.log(i);
    i++;
} */

/**
 *  EXAMPLE 4
 * 
 *  Regular "do while" loop
 */
/* let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5); */

/**
 *  EXAMPLE 5
 * 
 *  "for in" loop with Objects
 */

/* const myObject = {
    x: true,
    y: "abc",
    z: 121
}

for (let key in myObject) {
    console.log(key, " : ", myObject[key]);
} */

/**
 *  EXAMPLE 6
 * 
 *  "for in" loop with Array
 */

/* const myArray = ["Ademar", "Kostunija", "Pavlicek", "Normida"];

for (let key in myArray) {
    console.log(myArray[key]);
} */

/**
 *  EXAMPLE 7
 * 
 *  "for of" loop with Array
 */

/*  const myArray = ["Ademar", "Kostunija", "Pavlicek", "Normida"];

for (let element of myArray) {
    console.log("Ime:", element);
} */

/* const persons = [
    {
        name: "Mike",
        age: 25
    },
    {
        name: "Sindy",
        age: 27
    },
    {
        name: "Adam",
        age: 30
    }
];

for (let person of persons) {
    console.log(person.name, ":", person.age);
} */





































