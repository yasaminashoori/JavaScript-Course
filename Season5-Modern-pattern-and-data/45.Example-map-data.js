const john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};

const userRoles2 = new Map();
userRoles2.set(john, "admin").set(lily, editor).set(peter, "subscriber");



const userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

console.log(userRoles);
console.log(userRoles.get(john));

for(const item of userRoles.keys()){
    console.log(user.name);
}

for(const item of userRoles.values()){
    console.log(role);
}

for(const item of userRoles.entries()){
    console.log(item[0].name, item[1]);
}