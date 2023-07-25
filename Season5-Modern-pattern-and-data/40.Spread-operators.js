const arr = [4, 5];
const arr2 = [1, 2, arr];
const arr3 = [1, 2, arr[0], arr[1]];
const arr4 = [1, 2, ...arr];

//pass array as args
const arr5 = [1, 3, 4, 5, 7, 8];
console.log(...arr5);

const arr6 = [1, 3, 4, 5, 7, 8];
console.log([...arr6, 45]);

const newarr = [...arr6, 45];
console.log(arr6);


const tags = [1, 3, 4, 5, 7, 8];
const newTags =  [...tags];

const backendTags = ["node.js", "nest.js"];
console.log([...tags, ...backendTags]);

const str = "yas";
console.log([...str, "a"]);

//pass
console.log(...str);

const user = {
    name: "yas",
    id: 1,
};

console.log({...user, email: "yas@"});
console.log(user);

const newUser = {...user};
user.email = "sth@.com";
console.log(user, newUser);