const course = {
    title: "Next.js",
    price: 240,
    discount: 20,
    students: ["yas", "hadi", "ali"],
    isFree: false,
    category: {
        title: "front-end",
        id: 2
    },
    calcOfPrice: function () {
        this.offPrice = this.price * (1 - this.discount / 100);
        return this.offPrice;
    },
};

console.log(course.calcOfPrice());;
console.log(course.offPrice);