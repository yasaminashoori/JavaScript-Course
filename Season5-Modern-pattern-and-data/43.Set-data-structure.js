const set = new Set([1, 2, 2 , 3, 3, 5, 5, 6 , 7, 8]);
console.log(set);

console.log(set.size);
console.log(set.has(2));
console.log(set.add(12));
console.log(set.delete(2));
console.log(set[0]);
console.log(set.clear());

for (const item of set) console.log(item);

const userRoles = ["ADMIN", "ADMIN", "teacher"];
const uniqueRoles = new Set(roles);
console.log(...uniqueRoles);

// create unique array
const uniqueRoles2 = [...new Set(roles)];
console.log(uniqueRoles2);
console.log(new Set(roles).size);

// Create unique string
console.log([...new Set("Yasaaaaminnn adsddfsdf")].join(""));