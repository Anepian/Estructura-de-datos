// Programa: Generar los primeros 'a' números primos
// Este programa genera los primeros 'a' números primos e imprime cada número primo encontrado.

let a, b, c, d, aux;
aux = 0;

// Función para encontrar los primeros 'a' números primos
function primos(a) {
  b = 0;
  while (a > 0) {
    b = b + 1;
    c = 0;
    d = 0;
    while (c <= b) {
      if (b % c == 0) {
        d++;
      }
      c++;
    }
    if (d == 2) {
      console.log(b);
      a--;
    }
  }
}

a = 11; // Número de números primos que se desean encontrar
primos(a);
