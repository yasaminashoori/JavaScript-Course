function fizzBuzz(number) {
    if(typeof number !== "number") return "please enter a number!"
    if ((number % 5 === 0) && (number % 3 === 0)) return "FizzBuzz!"
    if (number % 3 === 0) return "Fizz!"
    if (number % 5 === 0) return "Buzz!"
    return "not a valid numbzzer!"
}

const final = fizzBuzz(15);
console.log(final);










































// function fizzBuzz(num) {
//     if ((num % 3 === 0) && (num % 5 === 0)) return "FiZZBUZZ!";
//     if (num % 3 === 0) return "FiZZ!";
//     if (num % 5 === 0) return "BUZZ!";
//     return "not valid number!"
// }

// const result = fizzBuzz(15);
// console.log(result);