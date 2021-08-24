/**
 *  ES6 - ARRAY HELPER METHOD - forEach()
 */

/* const arr = [23, 213, -43, 45, 22, 981, -34];

console.log(arr);

const sum = () => {
    let sum = 0;
    arr.forEach(function(elem, index, arr) {
        let val = `current element; ${ elem }, at Index:  ${ index }, array: ${ arr }`;
        console.log(val);
    });
    // console.log(sum);
}

sum(); */

// CHALLENGE

/* const myCities = ["London", "New York", "Singapore"];

function info(elem, index) {
    return elem + " is located at the index " + index +
    " in the myCities array.";
}

const arrayInfo = (elem, index) => elem + " is located at the index " + index +
" in the myCities array."

myCities.forEach((elem, index) => {
    console.log(info(elem, index));
})

myCities.forEach((elem, index) => console.log(arrayInfo(elem, index)));

console.log(myCities.forEach(() => {})); */ // undefined

/**
 * ES6 - ARRAY HELPER METHOD - map()
 */

/* const persons = [
    {
        name: "Ann",
        number: 381638283112,
    },
    {
        name: "Bob",
        number: 381641002333,
    },
    {
        name: "Dmitar",
        number: 49277608999,
    },
];

const numbers = persons.map(person => "+" + person.number);
console.log(numbers); */

/* const points = [23, 33, 24, 22, 12, 32, 22, 28, 32, 67, 32, 11 , 37];

// map() with external function
const correctionNums = num => num * .87;

const copyOfArr = points.map(elem => elem); // copy of the initial array

console.log("Copy of array:", copyOfArr);

const newArr = points.map(correctionNums); // array with correction numbers
console.log(newArr); */

/* const nums = [2, 7, -4, 3];

const numsSquare = nums.map(num => Math.pow(num, 2));

console.log(numsSquare); */