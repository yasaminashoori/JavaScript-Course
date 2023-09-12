const user ={
    name: 'yas',
    email: 'yas@gmail.com',
    name: '09213456784',
};


for (const key in user) {
    console.log(user[key]);
}

const roles = ["admin", "student", "teacher"];

for (const role in roles) {
    console.log(role, roles[index]);
} //object

for (const item of roles) {
    console.log(item);
} // array