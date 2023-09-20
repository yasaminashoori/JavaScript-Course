const user = {
    name: "Yas",
    age: 4,
    address: "Iran",
    isActive: true
};

user.name = "Me";
delete user.isActive;

console.log(typeof user);                            
console.log(user);

// dot notation
console.log(user.name);

// bracket notation
console.log(user["name"]);
console.log(user["age"]);
console.log(user["address"]);

const selectedProperty = "age";
console.log(user[selectedProperty]);

//not in the user object and it's undefined
console.log(user["selectedProperty"]);
console.log(user.selectedProperty);
