// Programa: Números triangulares hasta un límite dado
// Este programa calcula y muestra los números triangulares hasta el límite dado 'x'.

let x, y;

// Función para generar números triangulares hasta el límite dado
function triangulares(x) {
  for (let i = 1; i <= x; i++) {
    y = i * (i + 1) / 2;
    console.log(y);
  }
}

x = 21; // Límite hasta el cual se generarán números triangulares
triangulares(x);
