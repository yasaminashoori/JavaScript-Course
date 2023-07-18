const selectedColor = "blue";
const defaultColor = "black";
const userColor = selectedColor || defaultColor;
userColor = selectedColor ? selectedColor : defaultColor; //Ternary
console.log(userColor);
console.log(Boolean(userColor)); //Converting to boolean
console.log(!!userColor); //Converting to boolean
console.log(Number("4")); //Converting to number