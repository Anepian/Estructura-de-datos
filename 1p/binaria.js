// Este código realiza pruebas de búsqueda binaria en arreglos ordenados de diferentes tamaños,
// calcula el promedio de pasos requeridos para encontrar elementos aleatorios y muestra los resultados.

// Función para generar un arreglo ordenado de tamaño 'size'
function generarArregloOrdenado(size) {
  const arreglo = [];
  for (let i = 0; i < size; i++) {
    arreglo.push(i); // Llenar el arreglo con números ordenados
  }
  return arreglo;
}

// Función de búsqueda binaria en un arreglo ordenado 'arreglo' para un 'valor' específico
function busquedaBinaria(arreglo, valor) {
  let inicio = 0;
  let fin = arreglo.length - 1;
  let pasos = 0; // Contador de pasos

  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    const elementoMedio = arreglo[medio];

    pasos++; // Contabilizar el paso

    if (elementoMedio === valor) {
      return medio; // Si se encuentra el valor, devolver la posición
    } else if (elementoMedio < valor) {
      inicio = medio + 1; // Si el valor es mayor, buscar en la mitad derecha del arreglo
    } else {
      fin = medio - 1; // Si el valor es menor, buscar en la mitad izquierda del arreglo
    }
  }
  return -1; // Si el valor no se encuentra en el arreglo
}

// Función principal para ejecutar las pruebas
function ejecutarPruebas() {
  const tamaños = [1000, 10000, 100000]; // Tamaños de arreglo
  const iteraciones = 3; // Número de iteraciones por tamaño
  let totalPasos = 0; // Contador para los pasos totales

  for (let i = 0; i < tamaños.length; i++) {
    const tamaño = tamaños[i];
    const arreglo = generarArregloOrdenado(tamaño); // Generar el arreglo ordenado

    let pasosPorIteracion = 0;
    for (let j = 0; j < iteraciones; j++) {
      const valorBuscado = Math.floor(Math.random() * tamaño); // Generar un valor aleatorio
      const posicion = busquedaBinaria(arreglo, valorBuscado); // Realizar la búsqueda binaria
      pasosPorIteracion += posicion !== -1 ? 1 : 0; // Contabilizar la iteración si se encuentra el valor
    }

    totalPasos += pasosPorIteracion;
    console.log(`Tamaño del arreglo: ${tamaño}, Promedio de pasos: ${pasosPorIteracion / iteraciones}`);
  }

  console.log(`Promedio total de pasos: ${totalPasos / (tamaños.length * iteraciones)}`);
}

ejecutarPruebas(); // Ejecutar las pruebas
