const userName = "yas";
let copied = userName;
copied = "Ali";
console.log(userName, copied);

const user = {
    name: "yas",
    age: "21",
    friends: ["john", "sara"]
}; 

const copiedUser = user;
copiedUser.name = "Owner";
console.log(user, copiedUser);

const copiedUser2 = Object.assign({}, user); //shallow: copy first level value
copiedUser2.name = "ali";
copiedUser2.friends.puah("Alex");
console.log(user, copiedUser2);

//deep
const deepCopyUser  = JSON.parse(JSON.stringify(user));
deepCopyUser.friends.Push("Amanda");
console.log(deepCopyUser);