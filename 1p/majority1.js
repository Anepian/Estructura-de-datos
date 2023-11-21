// Programa: Encuentra el número mayoritario en un array aleatorio
// Este programa genera un array con números aleatorios y encuentra el número que se repite más de la mitad de las veces en el array.

// Declaración de variables
let a = [],
  b = [],
  x,
  y,
  nr,
  k = 0,
  repetido = 0;

// Genera un array con números aleatorios
function generarArrayAleatorio(longitud) {
  a.length = longitud;
  for (let j = 0; j < longitud; j++) {
    a[j] = Math.floor(Math.random() * (longitud - 1) + 1);
  }
  console.log("Array desordenado:", a);
}

// Encuentra el número más repetido en el array generado
function encontrarNumeroMasRepetido(longitud) {
  y = longitud - 1;
  generarArrayAleatorio(longitud);

  for (let l = 0; l <= y; l++) {
    b[l] = 0;
  }
  k = 1;

  do {
    for (let i = 0; i < a.length; i++) {
      if (k === a[i]) {
        b[k - 1]++;
      }
    }
    k++;
  } while (k < longitud);

  for (let j = 0; j < b.length; j++) {
    if (b[j] >= repetido) {
      repetido = b[j];
      nr = j + 1;
    }
  }

  const mitadArray = Math.floor(a.length / 2);
  if (repetido > mitadArray) {
    console.log(
      "El número mayoritario es: " + nr + " repitiéndose: " + repetido + " veces"
    );
  } else {
    console.log("No existe un número mayoritario");
  }
}

// Encuentra el número más repetido en un array de longitud 5
encontrarNumeroMasRepetido(5);
