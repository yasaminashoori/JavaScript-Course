const paymentStatus = "SUCCESS";
const isVerifiedPayment = true;

if (isVerifiedPayment && paymentStatus === "SUCCESS") {
    console.log("This is verified payment.");
} else if(paymentStatus === "PENDING"){
    console.log("This is pending payment. ");
}else{
    console.log("This is rejected payment.");
}
