// 1. count of logins

let counter = 0; 
function signupCount() {
    counter++;
    return counter;
}

console.log(loginCount());
console.log(loginCount());
console.log(loginCount());

function signupCount() {
    counter++;
    return counter;
}

console.log(signupCount());
console.log(signupCount());
console.log(signupCount());

//closure
function counterRequest(params) {
    let counter = 0;
    return function inner() {
        counter++;
        return counter;
    }
}

const loginReqs = counterRequest();
console.log(loginReqs());
console.log(loginReqs());

const signupReqs = counterRequest();
console.log(signupReqs());
console.log(signupReqs());