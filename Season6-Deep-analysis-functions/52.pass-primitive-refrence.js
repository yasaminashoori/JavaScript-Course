const userName = "yas";
function stringFun(str) {
    const newStr = 'Hi ${str}';
    return newStr;
};

console.log(stringFun(userName));
console.log(userName);

let str = userName;
const newStr = 'Hi {str}';

const user = {
    name :"yas",
};