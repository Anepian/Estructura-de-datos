//
//finally
//

const traverse = (n) => {//es6
  let c = n//iterator 
  while (c) {//exists //si c es un nodo
    console.log(c.data)//imprime n1, osea el valor
    c = c.next//cambiara nuestro nodo n1 hacia lo que es el siguiente nodo (n2)
  }
}

traverse(n1)

//importar