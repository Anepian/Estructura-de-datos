let a = {}, b = {};

for (i = 1; i <= 10e3; i++) {
  n = Math.floor(Math.random() * 10e3);
  a[n] = n;
}
c = Object.keys(a)
c.sort((x, z) => x < z ? 1 : z > x ? -1 : 0)
for (i = 0; i < c.length; i++) {
  let name = "name:"
  b[name + c[i]] = name + c[i]
}

console.log(b)