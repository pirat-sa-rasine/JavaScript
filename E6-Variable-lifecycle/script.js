"use strict";

/* h = 125;

console.log(h); */

/* var myVar = 521;

console.log(myVar); */

var person = {
    name: "Bob",
    age: 43
};

function updatePerson(person) {
    var updatedPerson = {};
    
    if (person.name) {
        updatedPerson.name = person.name;
        updatedPerson.updatedAt = new Date();
    }

    return updatedPerson;
}

console.log(updatePerson(person));