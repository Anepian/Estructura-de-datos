// Creación de variables para almacenar los pasos y tiempos
var averageSteps = [];
var totalTime = [];

// Definición de la clase Pila
function Pila(maximo) {
  this.Tamaño_Pila = [];
  this.max = maximo;
}

Pila.prototype = {
  // Método para verificar si la pila está llena
  llena: function() {
    return this.Tamaño_Pila.length === this.max;
  },

  // Método para verificar si la pila está vacía
  vacia: function() {
    return this.Tamaño_Pila.length === 0;
  },

  // Método para agregar elementos a la pila
  entrada: function(element) {
    if (this.llena()) {
      console.log("Tu pila está llena, elimina elementos.");
    } else {
      this.Tamaño_Pila.unshift(element);
    }
  },

  // Método para sacar elementos de la pila
  salida: function() {
    if (this.vacia()) {
      console.log("Tu pila está vacía, introduce elementos.");
    } else {
      return this.Tamaño_Pila.shift();
    }
  },

  // Método para mostrar los elementos de la pila
  mostrar: function() {
    return this.Tamaño_Pila.join("\n");
  },

  // Método para ver el elemento superior de la pila
  peek: function() {
    return this.Tamaño_Pila[0];
  }
};

// Función para ordenar la pila
function ord_pila(x) {
  for (let j = 1; j <= 5; j++) {
    let steps = 0;
    let start = Date.now();
    let h = new Pila(x);
    let le = new Pila(x);
    let nun, ri;
    let i = 1;

    nun = Math.floor(Math.random() * (x - 1) + 1);
    h.entrada(nun);

    while (i < x) {
      while (!le.vacia()) {
        h.entrada(le.salida());
        steps++;
      }
      ri = Math.floor(Math.random() * (x - 1) + 1);
      while (ri <= h.peek() && !h.vacia()) {
        le.entrada(h.salida());
        steps++;
      }
      if (ri >= h.peek() || h.vacia()) {
        h.entrada(ri);
        steps++;
      }
      i++;
    }

    while (!le.vacia()) {
      h.entrada(le.salida());
    }

    // Almacenar los pasos y tiempos en sus respectivos arrays
    averageSteps[j - 1] = steps;
    console.log(h.mostrar());
    console.log(`Los pasos en el ciclo ${j} de ${x} números aleatorios son: ${steps}`);

    let end = Date.now();
    totalTime[j - 1] = end - start;
    console.log(`El tiempo requerido en el ciclo ${j} de ${x} números aleatorios es: ${totalTime[j - 1]}ms`);
  }
}

// Funciones para diferentes tamaños de entrada
console.log("5 veces 10");
ord_pila(10);

console.log("5 veces 100");
ord_pila(100);

console.log("5 veces 1000");
ord_pila(1000);

// Cálculo de promedios y totales para pasos y tiempos
function calculateAverage(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum / array.length;
}

function calculateTotal(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

averageSteps[5] = calculateAverage(averageSteps);
averageSteps[6] = calculateTotal(averageSteps);
totalTime[5] = calculateAverage(totalTime);
totalTime[6] = calculateTotal(totalTime);

// Resultados finales
console.log("El promedio de pasos totales es:", averageSteps[5]);
console.log("Total de Pasos:", averageSteps[6]);
console.log("El promedio de tiempo total es:", totalTime[5] + "ms");
console.log("Total de tiempo:", totalTime[6] + "ms");
