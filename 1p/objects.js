// Programa: Generar un objeto con nombres aleatorios y contar su cantidad
// Este programa crea un objeto con 10,000 nombres aleatorios y luego cuenta cuántos nombres únicos hay en el objeto.

let obj = {};

for (let i = 1; i <= 1e4; i++) {
  let name = 'Name:' + Math.floor(Math.random() * 1e4);
  obj[name] = name;
}
console.log(obj);
console.log(Object.values(obj).length);
