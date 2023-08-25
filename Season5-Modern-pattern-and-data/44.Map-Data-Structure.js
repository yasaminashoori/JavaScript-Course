const randomArr = [1, 3];
const user = new Map();
console.log(user);
console.log(user.set("name", "yas"));
console.log(user);
user
    .set("email", "user@test.com")
    .set(true, "Ok Admin")
    .set("role", "Admin")
    .set(randomArr, "Dummy data");
console.log(user);
console.log(user.get("name"));
console.log(user.has("name"));
console.log(user.has(randomArr));
console.log(user.delete("email"));
console.log(user.clear("name"));
