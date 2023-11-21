// Programa: Generar un objeto con números aleatorios y ordenar sus claves en orden descendente
// Este programa crea un objeto con 10,000 números aleatorios como claves y los ordena en orden descendente en un nuevo objeto.

let a = {}, b = {};

for (let i = 1; i <= 10e3; i++) {
  let n = Math.floor(Math.random() * 10e3);
  a[n] = n;
}
let c = Object.keys(a);
c.sort((x, z) => x < z ? 1 : z > x ? -1 : 0);
for (let i = 0; i < c.length; i++) {
  let name = "name:";
  b[name + c[i]] = name + c[i];
}

console.log(b);
