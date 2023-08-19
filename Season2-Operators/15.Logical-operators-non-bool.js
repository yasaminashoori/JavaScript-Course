console.log(true || 0);
console.log(true || "yas");
console.log(0 || "yas");
console.log(null || "yas");
console.log(" " || 'yas');
console.log(" " || 'yas');
console.log(" " || 'yas');

const selectedColor = "blue";
const defaultColor = "black";
const userColor = selectedColor || defaultColor;

userColor = selectedColor ? selectedColor : defaultColor; //Ternary
console.log(userColor);
console.log(Boolean(userColor)); //Converting to boolean
console.log(!!userColor); //Converting to boolean
console.log(Number("4")); //Converting to number