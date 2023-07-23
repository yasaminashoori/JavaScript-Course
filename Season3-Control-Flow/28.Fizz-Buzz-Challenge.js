function fizzBuzz(num) {
    if ((num % 3 === 0) && (num % 5 === 0)) return "FiZZBUZZ!";
    if (num % 3 === 0) return "FiZZ!";
    if (num % 5 === 0) return "BUZZ!";
    return "not valid number!"
}

const result = fizzBuzz(15);
console.log(result);