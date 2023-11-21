// Programa: Sumar los múltiplos de 7 en el rango del 200 al 300
// Este programa suma todos los números que son múltiplos de 7 en el rango del 200 al 300.

let a, b, i;
a = 0;

for (i = 200; i <= 300; i++) {
  if (i % 7 === 0) {
    a = i + a;
  }
}

console.log("La suma de los múltiplos es igual a: " + a);
