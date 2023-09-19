// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
// const stuInfo = JSON.stringify({ name: "James", roll: 3 });
// console.log(stuInfo.name);

const data = { result: [{ userName: { title: "Mr.", name: "sakib khan" } }] };
console.log(data.result[0].userName.name);

const p = [1, 2, 3];
const q = p.find((n) => Math.pow(n, 3));
console.log(q);
typeof JSON;
console.log(typeof JSON);

const array = { hobbies: ["dancing", "singing", "acting"] };
console.log(JSON.stringify(array));
