function CreateCourse(title, price, discount) {
   this.title = title;
   this.price = price;
   this.discount = discount;
}

const course1 = new createCourse("next", 200, 100);
const course2 = new createCourse("js", 200, 100);

console.log(course1.title);
console.log(course2.title);

 