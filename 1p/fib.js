// Descripción: Este programa calcula la secuencia de Fibonacci hasta un número dado.
let previous = 0;
let current = 1;
let next;

function fibonacci(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(current); // Imprime el número actual de la secuencia de Fibonacci
    next = previous + current; // Calcula el siguiente número de la secuencia
    previous = current; // Actualiza el valor anterior con el valor actual
    current = next; // Actualiza el valor actual con el siguiente valor calculado
  }
}

const limit = 11; // Número hasta el cual se calculará la secuencia de Fibonacci
fibonacci(limit); // Llama a la función para imprimir la secuencia hasta 'limit'
