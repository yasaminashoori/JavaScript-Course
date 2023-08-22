function createCourse(title, price, discount) {
    this.title = title,
    this.price = price,
    this.discount =discount;
    this.calcOfPrice = function () {
        return price * (1 - discount / 100);
    };
}

const course1 = new createCourse("next", 300, 34);
const course2 = new createCourse("react", 300, 34);
course1.students = 120;
delete course1.title;
console.log(course1);
console.log(course1.hasOwnProperty("price"));

//get keys or values
console.log(Object.keys(course1));
console.log(Object.values(course1));
console.log(Object.entries(course1));