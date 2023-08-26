function calceOfPrice(numbers, discount = 0.3 ) {
    discount = discount || 0.3;
    let total = 0;
    for (const items of numbers) total += item;
    console.log(total * (1 -  discount));
    return total * (1 -  discount);
}
function calceOfPrice2(discount = 0.3, numbers ) {
    let total = 0;
    for (const items of numbers) total += item;
    console.log(total * (1 -  discount));
    return total * (1 -  discount);
}

calceOfPrice([1, 2, 3, 4], 0.6);
calceOfPrice2(undefined, [1, 2, 3, 4]);