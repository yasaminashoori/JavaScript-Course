//my way
const birthYear = 2001;
const currentYear = 2023;
const length = currentYear - birthYear;
const numWeeks = 365 / 7;
const reulst = length * numWeeks;
console.log(reulst);

// comparison
birthYear = 2001;
const birthYearB = 1995;
currentYear = 2023;
length = currentYear - birthYear;
lengthB = currentYear - birthYearB;
numWeeks = 365 / 7;
result = length * numWeeks;
resultB = lengthB * numWeeks;
console.log(result > resultB); 
