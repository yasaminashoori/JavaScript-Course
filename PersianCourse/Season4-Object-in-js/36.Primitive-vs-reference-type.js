const userName = "yas";
let copied = userName;
copied = "Ali";
console.log(userName, copied);

const user = {
    name: "yas",
    age: "21",
    friends: ["sahar", "sara"]
}; 

const copiedUser = user;
copiedUser.name = "Owner";
console.log(user, copiedUser);

//shallow: copy first level value
const copiedUser2 = Object.assign({}, user);
copiedUser2.name = "ali";
copiedUser2.friends.pushh("Alex");
console.log(user, copiedUser2);

//deep
const deepCopyUser  = JSON.parse(JSON.stringify(user));
deepCopyUser.friends.Push("Amanda");
console.log(deepCopyUser);
