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
    calcOfPrice: function (price, discount) {
        console.log(price * (1 - discount / 100));
    },
};

console.log(course.calcOfPrice(100, 30));