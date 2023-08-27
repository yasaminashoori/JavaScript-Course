const newCourse = document.createComment("p");
newCourse.textContent = "Javascript course";
newCourse.classList.add("course-title");
console.log(newCourse);
document.querySelector("#course-list").append(newCourse);
