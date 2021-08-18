// SOLUTION 1

/* var btn = document.getElementById("btn");
var clicks = 0;


// console.log(btn);

btn.addEventListener("click", function () {

    clicks += 1;
    console.log("Button was clicked.");

    this.textContent = "Button clicked " + clicks + " times";

}) */

// SOLUTION 2

//const createButton = () => {
    /* const btn = document.createElement("button");
    btn.innerHTML = "Click me";
    let clicks = 0; */

    /* btn.onclick = function() {
        console.log("Button was clicked.");
        clicks++;
        btn.innerHTML = `Button clicked ${ clicks } times`;
    } */

    /* btn.addEventListener("click", function() {
        console.log("Button was clicked.");
        console.log(this);
        clicks++;
        this.innerHTML = `Button was clicked ${ clicks } times`;
    }) */

    // Arrow function expression
    /* btn.addEventListener("click", () => {
        console.log("Button was clicked");
        console.log(this); // window object
        clicks++;
        this.innerHTML =  `Button was clicked ${ clicks } times`;
    }); */



    //document.body.appendChild(btn);
//}

// createButton();

/* function sum() {
    console.log(arguments);
    console.log(typeof arguments);
}

sum(1, 2, 3); */