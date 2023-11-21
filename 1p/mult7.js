// Programa: Multiplicar los múltiplos de 7 en el rango del 200 al 300
// Este programa busca los múltiplos de 7 en el rango del 200 al 299 y calcula el producto de todos ellos.

var total;

// Función que verifica si un número es múltiplo de otro
function isMultiple(valor, mult) {
  var resp = valor % mult;
  if (resp == 0) {
    return true;
  } else {
    return false;
  }
}

// Función para encontrar los múltiplos y calcular su producto
function multiple() {
  var min = 300;
  for (var i = 200; i < min; i++) {
    if (isMultiple(i, 7)) {
      // Multiplica los múltiplos de 7 encontrados
      if (typeof total === 'undefined') {
        total = i;
      } else {
        total *= i;
      }
    }
  }
  console.log("La multiplicatoria de los múltiplos es igual a: " + total);
  return total;
}

console.log(multiple());
