// Programa: Busqueda Secuencial en un arreglo aleatorio
// Este programa realiza búsqueda secuencial en un arreglo generado aleatoriamente y mide el tiempo y los pasos realizados.

let v = [],
  a,
  b,
  tp = [3],
  tt = [3];
var t1 = 0,
  t2 = 0,
  t3 = 0,
  y = 0,
  x = 0,
  pasos = 0;

// Función para generar un arreglo con números aleatorios
function aleatorio() {
  let j; // Agrega esta línea para declarar j
  v.length = y;
  for (j = 0; j <= y - 1; j++) {
    v[j] = Math.floor(Math.random() * y);
  }
}

// Función de búsqueda secuencial
function BusquedaSecuencial(element, array) {
  var t1 = Date.now();
  aleatorio();
  console.log(v);
  for (var i in array) {
    if (array[i] == element) {
      return "La posición en el arreglo es: " + i;
    }
    pasos++;
  }
  var t2 = Date.now();
  t3 = t2 - t1;
  return "La posición en el arreglo es: " + -1;
}

var y = 1000;
for (let i3 = 1; i3 <= 3; i3++) {
  y *= 10;
  x = Math.floor(Math.random() * y);
  console.log("Número que busco es: " + x);
  console.log(BusquedaSecuencial(x, v));
  console.log("Los pasos dados en el ciclo " + i3 + " son: " + pasos);
  tp[i3 - 1] = pasos;
  pasos = 0;
  console.log("El tiempo que se tarda es de: " + t3 + "ms");
  tt[i3 - 1] = t3;
}

var TP = tp[0] + tp[1] + tp[2];
console.log("Total de pasos dados con el método de Búsqueda Secuencial: " + TP);
var TT = tt[0] + tt[1] + tt[2];
console.log("Total de Tiempo con el método de Búsqueda Secuencial: " + TT + "ms");
console.log("////////////////METODO SECUENCIAL////////////////");
