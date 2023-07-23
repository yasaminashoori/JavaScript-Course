function stepWiseDiscount(totalPrice) {
    if (totalPrice < 100) return "No discount";
    if (totalPrice > 110) {
        const discount = (totalPrice - 10 / 10) * 3 
    if (discount > 25 ) return "Max of the discounts"  
    return discount
    }
}

console.log(stepWiseDiscount(110));