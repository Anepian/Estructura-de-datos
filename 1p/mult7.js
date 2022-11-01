// Multiplicar los multiplos de 7 del 200 a 300

var total;
function isMultiple(valor, mult) {
  var resp = valor % mult;
  if (resp == 0) {
    return true;
  } else {
    return false;
  }
}

function multiple() {
  var min = 300;
  for (var i = 200; i < min; i++) {
    if (isMultiple(i, 7)) {
      total = i * i;
    }
  }
  console.log("La multiplicatoria de los multiplos es igual a: " + total);
}
console.log(multiple());