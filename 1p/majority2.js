let a = [], b = [], x, y, nr, k = 0, repetido = 0;
function aleatorio(a) {
  a.length = x;
  b.length = y;
  for (j = 0; j <= x - 1; j++) {
    a[j] = Math.floor(Math.random() * ((x - 1) - 1 + 1) + 1);
    //generar los 5 grupos de numeros aleatorios
  }
  console.log(a);//mostrar array desordenado
}

function repeticiones(x) {
  y = x - 1
  aleatorio(a)
  for (l = 0; l <= y; l++) {
    b[l] = 0;
  }
  k = 1;
  do {
    for (i = 0; i < a.length; i++) {
      //alert(k+ "=="+ a[i] + "?")
      if (k == a[i]) {
        b[k - 1] = parseInt(b[k - 1]) + 1
      }
    }
    k++;
  } while (k < x);
  for (j = 0; j < b.length; j++) {
    if (b[j] >= repetido) {
      repetido = b[j];
      nr = j + 1;
    }
  }
  aux = Math.floor((a.length / 2))
  if (repetido > aux) {
    console.log("El numero mayoritario es: " + nr + " repitiendose: " + repetido + " veces")
  }
  else {
    console.log("No existe un numero mayoritario")
  }
}

repeticiones(x = 5)