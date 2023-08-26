console.log(Number("34"));  
console.log(+"34");  
console.log(Number.parseInt("34.5rem", 10)); 
console.log(Number.parseInt("34.5rem", 4)); 
console.log(Number.parseFloat("34.5rem"));  
console.log(Number.parseFloat("dd34.5rem")); //NAN 
console.log(Number.parseInt("dd34.5rem")); //NAN 

console.log(Math.floor(Math.random() * 8 + 1)); //between 1 - 8 

// rounding int
console.log(Math.floor(23.56));
console.log(Math.floor(23.9));
console.log(Math.floor(-23.9));

console.log(Math.ceil(23.2));
console.log(Math.ceil(23.9));

console.log(Math.round(23.9));
console.log(Math.round(23.2));

console.log(Math.trunc(23.9));
console.log(Math.trunc(23.2));
console.log(Math.trunc(-23.9));

console.log(Math.floor(Math.random() * 8 + 1));

 
const generateRandom = (min, max) => {
    min = Math.ceil();
    max = Math.floor();
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(generateRandom(3, 7));
console.log(generateRandom(3.3, 7.5));

console.log((23).toFixed(2));
console.log((23.676).toFixed(1));
console.log((23.453).toFixed(2));

