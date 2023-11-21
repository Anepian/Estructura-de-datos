// Programa: Encontrar el número mayoritario en un array generado aleatoriamente
// Este programa genera un array de números aleatorios y busca el número que se repite más de la mitad de las veces en el array.

let a = [],
  b = [],
  x,
  y,
  nr,
  k = 0,
  repetido = 0;

function aleatorio(a) {
  a.length = x;
  b.length = y;
  for (let j = 0; j <= x - 1; j++) {
    a[j] = Math.floor(Math.random() * ((x - 1) - 1 + 1) + 1);
    //generar los 5 grupos de números aleatorios
  }
  console.log(a); //mostrar array desordenado
}

function repeticiones(x) {
  y = x - 1;
  aleatorio(a);
  for (let l = 0; l <= y; l++) {
    b[l] = 0;
  }
  k = 1;
  do {
    for (let i = 0; i < a.length; i++) {
      if (k == a[i]) {
        b[k - 1] = parseInt(b[k - 1]) + 1;
      }
    }
    k++;
  } while (k < x);
  for (let j = 0; j < b.length; j++) {
    if (b[j] >= repetido) {
      repetido = b[j];
      nr = j + 1;
    }
  }
  const aux = Math.floor(a.length / 2);
  if (repetido > aux) {
    console.log("El número mayoritario es: " + nr + " repitiéndose: " + repetido + " veces");
  } else {
    console.log("No existe un número mayoritario");
  }
}

repeticiones(x = 5);
