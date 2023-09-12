const arr = [4, 5];
const arr2 = [1, 2, arr];
const arr3 = [1, 2, arr[0], arr[1]];
const arr4 = [1, 2, ...arr];

//pass array as args
const arr5 = [1, 3, 4, 5, 7, 8];
console.log(...arr5);

//push items to array
const arr6 = [1, 3, 4, 5, 7, 8];
console.log([...arr6, 45]);

const newarr = [...arr6, 45];
console.log(arr6);

//shallow copy
const tags = [1, 3, 4, 5, 7, 8];
const newTags =  [...tags];

// join array
const backendTags = ["node.js", "nest.js"];
console.log([...tags, ...backendTags]);

// add char to string
const str = "yas";
console.log([...str, "a"]);

//pass to func
console.log(...str);

// object
const user = {
    name: "yas",
    id: 1,
};

//add key value to obj
console.log({...user, email: "yas@"});
console.log(user);

// 1.copy (CLONE) 2. obj.assign
const newUser = {...user};
user.email = "sth@.com";
console.log(user, newUser);