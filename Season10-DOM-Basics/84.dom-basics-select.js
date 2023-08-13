const course = document.querySelector(".course-title");
course = document.querySelector(".course .course-title");
console.log(course);
console.log(course.tagName); // Enter the tags information
console.log(course.classList);
console.log(course.textContent);
const courses = document.querySelectorAll(".course-title");
console.log(courses[1]); // it will print the informations of tags 

courses.array.forEach(c => {
    console.log(c.textContent);
});

console.log(document.getElementById("course-list"));
console.log(document.querySelector("#course-list"));
console.log(document.getElementsByClassName("courses"));



