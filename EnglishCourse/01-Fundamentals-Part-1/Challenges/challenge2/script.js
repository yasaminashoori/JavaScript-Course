
const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / johnHeight ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI ${bmiMark} is higher than John's!`);
} else console.log(`John's BMI ${bmiJohn} is higher than Mark's!`);
