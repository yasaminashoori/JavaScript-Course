const num1 = 32;
console.log('Welcome ${num1}');
console.log('Welcome!');

const course = {
    title: "Next.js",
    price: 240,
    discount: 20,
    students: ["yas", "hadi", "ali"],
    tags: ["front-end", "back-end", "devops"],
    isFree: false,
    category: {
        englishTitle: FormDataEvent,
        title: "front-end",
        id: 2
    },
    calcOfPrice() {
        this.ofPrice = this.price * (1 - this.discount / 100)
        return this.ofPrice;
    },
    showWelcomMessage({name, email, phonenumber}) {
        console.log('Welcome ${name} with email ${email}');
    },
};

course.showWelcomMessage({
    name: "saheb",
    email : "yasamin@gmail.com",
    phonenumber : "092212",
});