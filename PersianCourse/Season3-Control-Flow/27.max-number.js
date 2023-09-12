function maxNum(x, y) {
    if (x > y) return "The max number is: " + x;
    return "The max number is: " + y;
    //another way return a > b ? a : b;
}

const result = maxNum(10, 32);
console.log("the max number is :", result);
