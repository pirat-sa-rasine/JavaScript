/**
 *  EXAMPLE 1
 * 
 *  CALL - custom "this"
 */

/* const myObject = {
    a: 10,
    b: true
};

const persons = [
    {
        name: "Ana",
        age: 28
    },
    {
        name: "Bob",
        age: 32
    }
]

function myFunction() {
    console.log(this);
}

function list() {
    for (let person of this) {
        console.log(person.name + ":" + person.age);
    }
}

myFunction(); // "this" is "window" object Window {window: Window, self: Window, document: document, name: "", location: Location, …}

myFunction.call(myObject); // {a: 10, b: true}

list.call(persons); // Ana:28
                    // Bob:32 */

/**
 *  EXAMPLE 2
 * 
 *  CALL - custom "this" and arguments
 */                

/* const myObject = {
    a:10,
    b: null,
}

function myFunction(a, b) {
    console.log(a + b);
    console.log(this);
}    

myFunction.call(myObject, 10, 3); */

/**
 *  EXAMPLE 3
 * 
 *  CALL - Call method of the object with other object as "this"
 */
/* 
const person1 = {
    city: "New York",
    name: "Bob",
    info: function() {
        console.log(this.name + " lives in " + this.city);
    },
};

person1.info(); // Bob lives in New York

const person2 = {
    name: "Alice",
    city: "Denver"
};

person1.info.call(person2); // Alice lives in Denver
                            // call() prosleđuje objekat koji je argument iliti
                            // objekat person2 pozajmljuje metod info() od objekta person1 */


/* const myObject = {
    a: 10,
    b: null,
}

function myFunction(a, b, c) {
    let sum = a + b + c;
    console.log(a, b, c);

    for (let key in this) {
        if (typeof this[key] === "number") {
            sum += this[key];
        }
    }
    console.log(sum);
}    

myFunction.apply(myObject, [18, 3, -4]); // 18 3 -4
                                         // 27

 */


