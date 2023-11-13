// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);

let js = "amazing";
if (js === "amazing") alert("JavaScript is fun!");
48 + 2 + 12;
console.log(48 + 2 + 12);
const numberChecker = 18;
switch (numberChecker) {
  case 12:
    console.log("this is an even number.");
    break;
  case 13:
    console.log("this is an odd number.");
    break;
  default:
    console.log("this is not a number");
}

// const tip;
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`bill: ${bill} tip ${tip} and total: ${tip + bill}`);
