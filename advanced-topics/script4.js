// CHALLENGE
// Create a function "waitingFn" with single parameter "timeInMs"
// and inside of the function create "while" loop and this loop should
// be running during "timeInMs".
// HINT: Date.now() - current time in ms since 1970


/* function waitingFn(timeInMs) {
    let endPoint = Date.now() + timeInMs;

    while (endPoint >= Date.now()) {

    }
}


waitingFn(3000);

console.log("Function call has just ended"); */


// CALLBACKS, EVENTS, EVENTS queue, execution context stack, Web APIs


/* console.log(Date.now());
function waitingFn(timeInMs) {
    let endPoint = Date.now() + timeInMs;   

    while (endPoint >= Date.now()) {
        
    }
    
}


setTimeout(() => {
    console.log(4,"seconds has just passed");
    
}, 4000);


waitingFn(8000);

console.log("End of programme"); */

// CLOSURES

/* function outerFn(mult) {
    const a = 10;
    console.dir(innerFn);
    function innerFn(b) {
        return (a + b) * mult;
    }

    return innerFn;
}

const result = outerFn(3);

console.log(result(50)); */