var AT = []
var PT = []

function pila(maximo) {
  this.Tamaño_Pila = []
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
    console.log("Tu pila esta llena, elimina elementos")
  } else {
    this.Tamaño_Pila.unshift(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu pila esta vacia, introduce elementos")
  }
  else {
    return this.Tamaño_Pila.shift()
  }
}

function llena() {
  if (this.Tamaño_Pila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Pila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let mostrar = ""
  for (let i = 0; i < this.Tamaño_Pila.length; ++i) {
    mostrar += this.Tamaño_Pila[i] + "\n"
  }
  return mostrar
}

function peek() {
  return this.Tamaño_Pila[0]
}

function ord_pila(x) {
  let pasos = 0;
  for (let j = 1; j <= 5; j++) {
    var start = Date.now()
    let h = new pila(x);
    let le = new pila(x);
    let nun, ri;
    let i = 1;
    nun = Math.floor(Math.random() * (x - 1) + 1)
    h.entrada(nun)
    while (i < x) {
      while (le.vacia() != true) {
        h.entrada(le.salida())
        pasos++
      }
      ri = Math.floor(Math.random() * (x - 1) + 1)
      while (ri <= h.peek() && h.vacia() != true) {
        le.entrada(h.salida())
        pasos++
      }
      if (ri >= h.peek() || h.vacia()) {
        h.entrada(ri)
        pasos++
      }
      i++
    }
    while (!le.vacia()) {
      h.entrada(le.salida())
    }
    AT[j - 1] = pasos;
    console.log(h.mostrar())
    console.log("Los pasos en el ciclo " + j + " de " + x + " numeros aleatorios son: " + pasos)
    var end = Date.now()
    PT[j - 1] = end - start
    console.log("El tiempo requerido en el ciclo " + j + " de " + x + " numeros aleatorios son: " + PT[j - 1] + "s")
    pasos = 0
  }
}
ord_pila(10)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 10")
ord_pila(100)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 100")
ord_pila(1000)
AT[5] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4]) / (5)
AT[6] = (AT[0] + AT[1] + AT[2] + AT[3] + AT[4])
PT[5] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4]) / (5)
PT[6] = (PT[0] + PT[1] + PT[2] + PT[3] + PT[4])
console.log("El promedio de pasos totales es: " + AT[5])
console.log("Total de Pasos: " + AT[6])
console.log("El promedio de tiempo total es: " + PT[5] + "s")
console.log("Total de tiempo: " + PT[6] + "s")
console.log("5 veces 1000")