function createCourse(title, price, discount) {
    return {
        title,
        price,
        discount,
        calcOfPrice: function () {
        return price * (1 - discount / 100);
    },
    };
}

console.log(createCourse("js", 20, 23));

