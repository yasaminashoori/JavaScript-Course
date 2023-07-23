function Calculate_Area (radius) {
    const area = 3.14 * radius ** 2;
    // console.log("the area is: ", area);
    return area;
}
const result = Calculate_Area(10);
console.log(result);


function getRole(role) {
    if (role === "ADMIN") {
        return "The usr role is ADMIN"
    } else if(paymentStatus === "PENDING") {
        return "The usr role is Merchant" 
    }else { 
        return "The usr role is Unknown"
    }
}

function getRole(role) {
    if (role === "ADMIN") return "The user role is ADMIN"
    if (paymentStatus === "PENDING") return "The user role is MERCHANT"
    return "The usr role is Unknown"
}

const finalRole = getRole("ADMIN");
console.log("The role is: ", finalRole);