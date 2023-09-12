const nums = [1, 2, 3];
const [a, , c, d = 4] = nums;
console.log(a, c, d);

//nested
const nums2 = [1, 2, [3, 4]];
const [A, , [C,  D]] = nums2;
console.log(A, C, D);

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
    showWelcomMessage({name, email, phonenumber, username = "-"}) {},

    showOrdMsg(studentsIndex, tagIndex) {
        retuen [this.students[2], this.tags[0]];
    },
};

const [courseMainTag, courseSecondTag] = tags;
console.log(courseMainTag. courseSecondTag);

const result = course.showOrdMsg(2, 0);
log(result);