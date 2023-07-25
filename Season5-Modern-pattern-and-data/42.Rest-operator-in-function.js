function sum(...args) {
    let total = 0;
    for(const item of args) total += item;
    console.log(total);
}

sum(1, 2);
sum(1, 2, 3);
sum(1, 2, 3, 4, 5);

const nums = [10 , 20, 30, 40, 50, 60];
sum(...nums);

function getTotalPrice(discount, ...rest) {
    let total = 0;
    for(const item of rest) total += item;
    console.log(total * (1 - discount));
}

getTotalPrice(0.3, 1, 2, 4, 4, 5, 5, 77)