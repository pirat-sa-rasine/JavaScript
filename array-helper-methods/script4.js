const myArray = [10, 'abc', null, [3, undefined]];

//const myNumbers = [3, 24, -19, 0.345];

/*
console.log(myArray.includes(10));
console.log(myArray.includes("abc"));
console.log(myArray.includes("null"));
console.log(myArray.includes(null)); */

/**
 * EXAMPLES - reduce()
 */
           //  example No 1

/* const myNumbers = [-15, 10, 3, 15];

const sum = arrayOfNumbers => arrayOfNumbers.reduce((acc, number) => {
    console.log("acc:", acc, ", number", number);
    return acc + number;
});

console.log(sum(myNumbers)); */ // 33

        // example No 2

/* const persons = [
    {
        name: "Ann",
        age: 23
    },
    {
        name: "Bogdan",
        age: 34
    },
    {
        name: "Clark",
        age: 24
    },
    {
        name: "David",
        age: 28
    },
];

            

const personsNames = arrayOfPersons => arrayOfPersons.reduce((names, person) => {
    names.push(person.name);
    return names;
}, []);

console.log(personsNames(persons)); */

        // example No 3

/* const fruits = ["banana", "ananas", "mango", "banana", "apple", "apple"];

const uniqueFruits = arrayOfFruits => arrayOfFruits.reduce((arr, fruit) => {
    if (!arr.includes(fruit)) {
        arr.push(fruit);
    }
    return arr;
}, []);

console.log(uniqueFruits(fruits)); */

        // example No 4 -  reduce Array of Objects
/* 
const posts = [
    {
        title: "How to find JS developer job?",
        postId: 3421,
        comments: 25
    },
    {
        title: "Is it hard to learn ES6?",
        postId: 5231,
        comments: 3
    },
    {
        title: "Should I learn React or Angular?",
        postId: 1211,
        comments: 12
    },
    {
        title: "What is Node.js?",
        postId: 1134,
        comments: 32
    },
    {
        title: "Are you looking for challenges?",
        postId: 5901,
        comments: 9
    },
];

const minimalCommentsQty = 10;

const popularPostsIds = (arrayOfArticles, minimalCommentsQty) => {
    return arrayOfArticles.reduce((arrOfIds, post) => {
        if (post.comments >= minimalCommentsQty) {
            arrOfIds.push(post.postId);
        }
        return arrOfIds;
    }, []);
};

console.log(popularPostsIds(posts, minimalCommentsQty)); */
/* 
const products = [
    {
        title: "Phone case",
        price: 23,
        quantity: 2,
        category: "Accessories",
    },
    {
        title: "Android phone",
        price: 159,
        quantity: 1,
        category: "Phones",
    },
    {
        title: "Headphones",
        price: 78,
        quantity: 1,
        category: "Accessories",
    },
    {
        title: "Sport watch",
        price: 53,
        quantity: 2,
        category: "Watches",
    },
];



const listOfProducts = products => products.reduce((arr, product) =>{
    if (!arr.includes(product)) {
        arr.push(product.title);
    }
    return arr;
} , []);

//console.log(listOfProducts(products)); // ["Phone case", "Android phone", "Headphones", "Sport watch"]

const listOfProductQuantities = products => products.reduce((finalInfoObject, product) => {
    finalInfoObject[product.category] = (finalInfoObject[product.category] || 0) + product.quantity;
    console.log("current product:", product);
    return finalInfoObject;
}, {});

console.log(listOfProductQuantities(products));
console.log("eho:", 1 || 0);
console.log((undefined || NaN)); */











