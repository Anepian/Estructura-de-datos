var AT = []
var PT = []

function fila(maximo) {
  this.Tamaño_Fila = []
  this.max = maximo
  this.llena = llena
  this.vacia = vacia
  this.entrada = entrada
  this.salida = salida
  this.mostrar = mostrar
  this.peek = peek
}

function entrada(element) {
  if (this.llena()) {
    console.log("Tu fila esta llena, elimina elementos")
  } else {
    this.Tamaño_Fila.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu fila esta vacia, introduce elementos")
  }
  else {
    return this.Tamaño_Fila.shift()
  }
}

function llena() {
  if (this.Tamaño_Fila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Fila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let Mostrar = ""
  for (let i = 0; i < this.Tamaño_Fila.length; ++i) {
    Mostrar += this.Tamaño_Fila[i] + "\n"
  }
  return Mostrar
}

function peek() {
  return this.Tamaño_Fila[0]
}

function ord_fila(x) {
  let steps = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let f = new fila(x);
    let q = new fila(x);
    let n, r;
    let i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    f.entrada(n)
    while (i < x) {
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (f.vacia() != true) {
        q.entrada(f.salida())
        steps++
      }
      while (r > q.peek()) {
        f.entrada(q.salida())
        steps++
      }
      if (q.vacia()) {
        f.entrada(r)
        steps++
      }
      if (r <= q.peek()) {
        f.entrada(r)
        steps++
      }
      while (q.vacia() != true) {
        f.entrada(q.salida())
      }
      i++
    }
    AT[j - 1] = steps;
    console.log(f.mostrar())
    console.log("Los pasos en el ciclo " + j + " de " + x + " numeros aleatorios son: " + steps)
    var fin = Date.now()
    PT[j - 1] = fin - start
    console.log("El tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios son: " + PT[j - 1] + "s")
    steps = 0
  }
}

ord_fila(10)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 10")
ord_fila(100)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 100")
ord_fila(1000)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 1000")