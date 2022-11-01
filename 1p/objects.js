let obj = {};

for (let i = 1; i <= 1e4; i++) {
  let name = 'Name:' + Math.floor(Math.random() * 1e4);
  obj[name] = name;
}
console.log(obj)
console.log(Object.values(obj).length)