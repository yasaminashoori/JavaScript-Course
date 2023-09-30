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
const  bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`bill: ${bill} tip ${tip} and total: ${tip+bill}`);
