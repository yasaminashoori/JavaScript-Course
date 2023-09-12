const strLit = "yas"; //string literal
const strObj = new String("yas");
console.log(strLit.length);
console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

const numLit2 = 21;
const numObj2 = new Number(21);
console.log(numLit2, typeof numLit2);
console.log(numObj2, typeof numObj2);

const boolLit3 = true;
const boolObj3 = new Boolean(true);
console.log(boolLit3, typeof boolLit3);
console.log(boolObj3, typeof boolObj3);
console.log(boolLit3 instanceof Boolean);

const arrLit4 = ["yas", 21, "computer"];
const arrObj4 = new Array(["yas", 21, "computer"]);
console.log(arrLit4, typeof arrLit4);
console.log(arrObj4, typeof arrObj4);

function createCourse(title, price, discount) {
    this.title = title,
    this.price = price,
    this.discount =discount;
    this.calcOfPrice = function () {
        return price * (1 - discount / 100);
    };
}

const course1 = new createCourse("next", 300, 34);
console.log(course1.constructor);
console.log(course1 instanceof createCourse);