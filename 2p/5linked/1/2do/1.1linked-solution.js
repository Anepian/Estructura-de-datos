import { Linked, Node } from '../../../../avl/linked/node5es.js'
let n1 = new Node('a')
let n2 = new Node('b')

let l = new Linked(n1)
l.prepend(n2)
l.append(new Node('c'))
l.prepend(new Node('d'))
l.traverse(l.getHead())
//probar el contain
console.log(l.contains('a'))
console.log(l.contains('z'))
//Obtener la cola
console.log(l.getTail())