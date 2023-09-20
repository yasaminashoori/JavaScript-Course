const isActive = true;
const couponUsage = 10;
const couponLimit = 20;
console.log(couponUsage < couponLimit && isActive);
console.log(couponUsage < couponLimit || isActive);
console.log(isActive || couponUsage < couponLimit);
console.log(!isActive);
