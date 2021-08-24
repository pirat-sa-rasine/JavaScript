/**
 *  ARRAY HELPER METHODS - filter()
 */

/* const postsJSON = [
    '{"postId":1355,"commentsQuantity":5}',
    '{"postId":5131,"commentsQuantity":13}',
    '{"postId":6134,"commentsQuantity":2}',
] */
/** From the "postJSON" array create "posts"
 *  array that will consist of JavaScript object
 */

/* const objectJson = postsJSON.map(JSON.parse);
const objectJson = postsJSON.map(post => JSON.parse(post));

console.log(objectJson); */

/* const myNumbers = [19, 23, 55, 189, 42, 98, 48];

const filteredNumbers = myNumbers.filter(num => num > 50);

console.log("Brojevi veci od 50:", filteredNumbers); */

/**
 * ARRAY HELPER METHODS - find()
 */

/* const persons = [
    {
        name: "Ann",
        age:23
    },
    {
        name: "Bogdan",
        age:34
    },
    {
        name: "Clark",
        age:24
    },
    {
        name: "David",
        age:28
    },
]

console.log(persons.find(person => person.name === "David")); */

/**
 * CHALLENGE
 * 
 * Create a function "findSinglePost" that will have two parameters - "postId" and "posts"
 * and will return object with matched "postId"- If wasn't found - return "undefined"
 */

/* const posts = [
    { postId: 1335, comentsQuantity: 5 },
    { postId: 5131, comentsQuantity: 13 },
    { postId: 6135, comentsQuantity: 2 },
];

function findPost(pId, posts) {
    return posts.find(post => post.postId === pId)
}

console.log(findPost(133, posts)); */

/**
 * EXAMPLE - every()
 */

/* const arr = [4, 10, 14, 25, 25, 50];
const arr2 = [4, 10, 14, 25, null, 50];
const arr3 = [150, 132, 89, 134];

const arrayCheck = inputArray => {
   if (inputArray.some(elem => typeof elem !== "number")) {
       return "Some elements are not numbers.";
   } 

   if (inputArray.every((element, index, array) => index > 0 ? element >= array[index - 1] : true)) {
       return "Array is sorted in ascending order";
   
    }
   if (inputArray.every((element, index, array) => index > 0 ? element <= array[index - 1] : true)) {
       return "Array is sorted in descending order";
   }

   return "Array is not sorted.";
}

console.log(arrayCheck(arr3)); */

/* const arr = [,,,,,];
const sand = "sand";
const arr2 = [1, 'abc', null];

console.log(arr[0]);
console.log(arr2.some(content => content === 1));

arr2.map(elem => console.log(elem));
arr.map(elem => console.log(elem)); */





