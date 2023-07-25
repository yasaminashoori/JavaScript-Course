const arr = [1, 2, ...[3, 4]];

const [a, b, ...other] =  [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, other);

const tags1 = ["React.js", "vue.js"];
const tags2 = ["next.js", "nuxt"]
const [reactTag, ...otherTags] = [...tags1, ...tags2];
console.log(reactTag, otherTags);

const user = {
    name: "yas",
    email: "@yas.com",
    id: 3,
}

const {id, ...otherUsrsData} = user;
console.log(id, otherUsrsData);