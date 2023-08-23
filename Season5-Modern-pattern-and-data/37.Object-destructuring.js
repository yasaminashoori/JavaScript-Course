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
    calcOfPrice() {
        this.ofPrice = this.price * (1 - this.discount / 100)
        return this.ofPrice;
    },
    showWelcomMessage(){obj} {
        console.log(obj);
        console.log();
    }
};

console.log(course.category.englishTitle); //too long

const {price, category} = course; //shorten the access
console.log(category.englishTitle);

const {title : courseTitle, favourites = []} = course; 
console.log(courseTitle);

const {englishTitle, id, title} = category;
console.log(englishTitle);

// used together for catefory declration
// const {title : courseTitle2, prices = [], category: {englishTitle}} = course;
// console.log(courseTitle2, prices);

course.showWelcomMessage({
    name: "saheb",
    email : "yasamin@gmail.com",
    phonenumber : "092212",
});