/* const myArr = [];

console.log(myArr);

myArr[0] = "First Element"; // Array [ "First Element" ]

console.log(myArr);

myArr[2] = "Third Element";

console.log(myArr); // Array(3) [ "First Element", <1 empty slot>, "Third Element" ]

myArr.push("Next Element");

console.log(myArr); // Array(4) [ "First Element", <1 empty slot>, "Third Element", "Next Element" ]

myArr.push({});

console.log(myArr); // Array(5) [ "First Element", <1 empty slot>, "Third Element", "Next Element", {} ]

myArr[4].objProp = "I am the Object property";

console.log(myArr);  */
/* Array(5) [ "First Element", <1 empty slot>, "Third Element", "Next Element", {…} ]
​    0: "First Element"​
    2: "Third Element"​
    3: "Next Element"​
    4: Object { objProp: "I am the Object property" } */

/* console.log(myArr[4]["objProp"]); // "I am the Object property"

myArr[5] = {};
myArr[5][0] = "Milan"; 

myArr[6] = {
    0: 1980,
    1: 2020,
    2: 2016,
}

console.log(myArr);

myArr[6][0] = 1908;

console.log(myArr); */
/*  0: "First Element"​
2: "Third Element"​
3: "Next Element"​
4: Object { objProp: "I am the Object property" }​
5: Object {  }​
6: Object { 0: 1908, 1: 2020, 2: 2016 }
​ */

/* delete myArr[3]; // Array(7) [ "First Element", <1 empty slot>, "Third Element", <1 empty slot>, {…}, {…}, {…} ]

console.log(myArr[3]); // undefined

myArr.shift(); // briše element iz niza čime se menja dužina niza

console.log(myArr); // Array(6) [ <1 empty slot>, "Third Element", <1 empty slot>, {…}, {…}, {…} ]
 */


/* const myArr1 = [1, 2, 3];
const myArr2 = [1, 2, 3];

console.log(myArr1 === myArr2); // false => object reference

const copyOfMyArr2 = myArr2;

console.log(myArr2 === copyOfMyArr2); // true => pokazivač na istu memorijsku lokaciju

console.log(myArr1.toString() === myArr2.toString());  // true "1, 2, 3" === "1, 2, 3" */

/**
 *  CHALLENGE
 * 
 * Array of objects
 * 
 * Create Array with 3 objects.
 * Each object will have two properties - carBrand, price.
 * Add one more object to the Array
 */

/* const arrayOfCars = [];

function addCar(carModel, carPrice) {
    return {
        carBrand: carModel,
        price: carPrice,
    };
}

arrayOfCars.push(addCar("Audi", 23000));
arrayOfCars.push(addCar("BMW", 28000));
arrayOfCars.push(addCar("Mercedes", 34000));


console.log(arrayOfCars); */
/* 
    (3) [{…}, {…}, {…}]
    0: {carBrand: "Audi", price: 23000}
    1: {carBrand: "BMW", price: 28000}
    2: {carBrand: "Mercedes", price: 34000}
    length: 3 
*/

