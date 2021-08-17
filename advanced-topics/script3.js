// PASS BY VALUE

/* const a = 23;

console.log("a: ", a);

function add(num) {
    num +=1 ;
    console.log("num:", num,"a:", a);
}

add(a);
console.log("globalno a:", a); */

// PASS BY REFERENCE

/* const myArr = [2, -4, 23, 6];

console.log("myArr:", myArr);

function addElem(arr) {
    console.log(arr === myArr);

    arr.push(arr.length);
    
    console.log("arr inside f:", arr);
    console.log("myArr:", myArr)
}

addElem(myArr); */

// CHALLENGE
// Create a function that will add custom method to the global object "window"

/* function addCustomGlobalMethod(globalObject) {
    globalObject.customMethod = function() {
        console.log("Greeting from the custom method");
    }
}

addCustomGlobalMethod(this);

this.customMethod(); // same as window.customMethod();

customMethod(); */

// MY OWN CHALLENGE

/* function listHeroes(world) {
    world.list = function() {
        for (let player of this) {
            if (player.hero) {
                console.log("Hero:", player.hero);
            }
        }
    }
}

const epsilon = [
    {
        player: "Ibro",
        hero: "Unlak - rox"
    },
    {
        player: "Arema",
        hero: "Underlakab"
    },
    {
        player: "Son III",
        hero: "Tarkan"
    },
];

listHeroes(epsilon);

epsilon.list();

console.log(epsilon); */

// IIFE - Immediately invoked function expression


/* (function() {
    this.customMethod = function() {
        console.log("Greetings from the customMethod()");
    };
})();

customMethod(); */














