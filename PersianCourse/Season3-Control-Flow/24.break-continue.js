let i = 1;
while (i <= 10) {
    if (i >= 5) break;
    if (i % 2 === 0) console.log("the even number is", i);
    i++;
}


i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}
