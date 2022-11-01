function cola() {
  this.Tamaño_Cola = []
  this.max = 5
  this.entrada = entrada
  this.salida = salida
  this.llena = llena
  this.vacia = vacia
  this.mostrar = mostrar
}

function entrada(element) {
  if (this.llena()) {
    console.log("Tu fila esta llena, elimina elementos")
  }
  else {
    this.Tamaño_Cola.push(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu fila esta vacia, introduce elementos")
  }
  else {
    this.Tamaño_Cola.shift()
  }
}

function llena() {
  if (this.Tamaño_Cola.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Cola.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let Mostrar = ""
  for (let i = 0; i < this.Tamaño_Cola.length; ++i) {
    Mostrar += this.Tamaño_Cola[i] + "\n"
  }
  return Mostrar
}

let Test = new cola();
Test.entrada("Oscar")
Test.entrada("Damian")
Test.entrada("Jorge")
Test.entrada("Carlos")
Test.entrada("Alejandra")
console.log(Test.mostrar())
Test.entrada("Luis")
Test.salida()
Test.salida()
Test.salida()
Test.salida()
Test.salida()
Test.salida()