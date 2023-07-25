const course = {
    title: "Next.js",
    price: 240,
    discount: 20,
    students: ["yas", "hadi", "ali"],
    tags: ["front-end", "back-end", "devops"],
    isFree: false,
    category: {
        englishTitle: FormDataEvent,
        title: "front-end",
        id: 2
    },
    calcOfPrice: function () {
        this.ofPrice = this.price * (1 - this.discount / 100)
        return this.ofPrice;
    },
};

console.log(category.englishTitle);
const {title, category} = course;
console.log(course.category.englishTitle);
const {title : courseTitle, tags} = course;
console.log(courseTitle);

const {title : courseTitle2, prices = [], category: {englishTitle}} = course;
console.log(courseTitle2, prices);

const {englishTitle, id, title} = category;
console.log(englishTitle);