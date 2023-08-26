function incArray(data, num) {
    const newArray = [];
    for (const item of data) {
        newArray.push(item + num);
    }
    return newArray;
}
function decArray(data, num) {
    const newArray = [];
    for (const item of data) {
        newArray.push(item - num);
    }
    return newArray;
}

console.log(incArray[2, 4, 6], 2);
console.log(decArray[2, 4, 6], 2);