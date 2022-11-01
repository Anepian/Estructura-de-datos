let v = [], a, b, tp = [3], tt = [3];
var t1 = 0, t2 = 0, t3 = 0, y = 0, x = 0, pasos = 0;
function aleatorio() {
  v.length = y;
  for (j = 0; j <= y - 1; j++) {
    v[j] = (Math.floor(Math.random() * y))
  }
}
function up(a, b) {
  return a - b;
}
function BusquedaBinario(x, y) {
  var t1 = Date.now();
  aleatorio(y);
  v.sort(up);
  console.log(v)
  var low = 0, high = v.length - 1, mid, element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = v[mid]
    if (element < x) {
      low = mid + 1
    } else if (element > x) {
      high = mid - 1;
    } else {
      return "La posicion en el Arreglo es: " + mid;
    }
    pasos++
  }
  var t2 = Date.now();
  t3 = t2 - t1;
  return "La posicion en el Arreglo es: " + -1
}

var y = 1000
for (let i2 = 1; i2 <= 3; i2++) {
  y *= 10;
  x = Math.floor(Math.random() * y);
  console.log("Numero que busco es: " + x)
  console.log(BusquedaBinario(x, y))
  console.log("Los pasos dados en el ciclo " + i2 + " son: " + pasos)
  tp[i2 - 1] = pasos;
  pasos = 0
  console.log("El tiempo que se tarda es de: " + t3 + "ms")
  tt[i2 - 1] = t3;
}
var TP = tp[0] + tp[1] + tp[2];
console.log("Total de pasos dados con el metodo de Busqueda Binaria: " + TP)
var TT = tt[0] + tt[1] + tt[2];
console.log("Total de Tiempo con el metodo de Busqueda Binaria: " + TT + "ms")
console.log("////////////////METODO BINARIO////////////////");