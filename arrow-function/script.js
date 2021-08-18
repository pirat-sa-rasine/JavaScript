// EXAMPLE 1

/* console.log(sum(1, 3)); // Uncaught ReferenceError: Cannot access 'sum' before initialization
                        // "sum" is in TDZ becouse of "const" keyword in compilation phase
                        // and doesn't exist in execution phase becouse it is not initialized
                        // nor assigned
const sum = (a, b) => a + b;

console.log(sum(3, 7)); // 10
console.log(sum(23, 14)); // 37 */

// EXAMPLE 2

/* const post = {
    title: "Sample title",
    comments: 10,
    shared: true,
    published: true,
    postId: 5134,
}; */

// explicit return of object
/* const processedPost = (post) => {
    return {
        title: post.title,
        comments: post.comments,
        popular: post.comments > 5 ? true : false,
    };
}; */

// implicit return of object
/* const processedPost = post => ({
    title: post.title,
    comments: post.comments,
    popular: post.comments > 5 ? true : false,
});


console.log(processedPost(post)); */

// EXAMPLE 3
//
// IIFE

/* (() => this.greeet = "Hey, what's up?;")(); */

/* (() => {
    this.greet = () => "Hey, What is up???";
})();

console.log(greet()); */

// EXAMPLE 4
//
// arrow functions and "this"

/* const num = {
    value: 100,
    info: function info() {
        console.log(this); // num object => {value: 100, info: ƒ} 
        return this.value; // 100
    }
};


const num2 = {
    value: 200,
    info: () => {
        console.log(this); // window object
        return this.value; // undefined
    }
};

console.log(num.info());
console.log(num2.info()); */

// EXAMPLE 5

/* const anotherNum = {
    value: 5,
    info: function info() {
        console.log(this);  // anotherNum object => {value: 5, info: ƒ}
        return this.value; // 5
    }
};

console.log(anotherNum.info()); // 5

const newNum = {
    value: 17,
};

console.log(anotherNum.info.call(newNum)); // newNum object , 17 */

// EXAMPLE 6

/* const str = {
    value: "Delayed greeting",
    greeet: function greet() {        
        setTimeout(function() {
            console.log(this); // window object
            console.log(this.value); // this is lost in cb function - undefined
        }, 2000);
    },
    greet: function greet() {
        const self = this;
        setTimeout(function() {
            console.log(self); // str object {value: "Delayed greeting", greeet: ƒ, greet: ƒ, greeeet: ƒ}
            console.log(self.value); // Delayed message
        }, 2000);
    },
    greeeet: function greet() {        
        setTimeout(() => {
            console.log(this); // str object {value: "Delayed greeting", greeet: ƒ, greet: ƒ, greeeet: ƒ}
            console.log(this.value); // Delayed message
        }, 2000);
    },
};

str.greeet(); */

// EXAMPLE 7 - object literal
/* 
const num =  {
    value: 100,
    info: function() {
        console.log(this); // num object
        return this.value; // 100
    }
} */

// EXAMPLE 8 - Function constructor

/* function GroceryItem(title, kind) {
    this.title = title;
    this.kind = kind;
}

const apple = new GroceryItem("Apple", "fruit");

console.log(apple);

const brocolli = new GroceryItem("Brocoli", "vegetable");

console.log(brocolli);

GroceryItem.prototype.info = function() {
    return this.title + " is " + this.kind;
}

// "this" is window object and function always returns "undefined is undefined"
/* GroceryItem.prototype.info = () => {
    return this.title + " is " + this.kind;
} */

// console.log(brocolli.info());

