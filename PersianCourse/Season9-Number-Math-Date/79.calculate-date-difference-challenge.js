const now = new Date();
console.log(now);

console.log(Number(now));
console.log(+now);

const daysDiff = (end, start) => {
    const millSecs = new Date(end) - new Date(start);
    const days = Math.floor(millSecs / (24 * 60 * 60 * 1000));
    return days;
}

console.log(daysDiff("4/12/2023", "4/1/2023"));