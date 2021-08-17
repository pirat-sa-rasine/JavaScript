// EXAMPLE 5 - BIND

/* const myObject = {
    a:10,
    b: null,
}

function myFunction(a, b) {
    console.log(a + b);
    console.log(this);
}    

myFunction.bind(); */


// EXAMPLE 6 - BIND

/* const module = {
    x: 42,
    getX: function () {
        return this.x;
    }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42 */


// EXAMPLE 7 - BIND

/* this.x = 9;

console.log(window.x); // 9

const module = {
    x: 81,
    getX: function() {
        return this.x;
    },
}

console.log(module.getX()); // 81  => function execution context


const globalGetX = module.getX;
console.log(globalGetX); /* ƒ () {
                                return this.x;
                            } 
                        */
                            

/* console.log(globalGetX()); // 9  => global execution context

const funcGetX = globalGetX.bind(module);
console.log(funcGetX());

globalGetX.bind() */


// EXAMPLE 8 - BIND

/* const myFn = function() {
    for (let e of this) {
        console.log(e);
    }
}

const cities = ["New York", "Belgrade", "Tokyo"];

const listOfCities = myFn.bind(cities);

listOfCities(); // New York
                // Belgrade
                // Tokyo */