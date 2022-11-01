import { Linked, Node } from '../../../../avl/linked/node5es.js'
let nONE = new Node('a')
let nTWO = new Node('b')

let l = new Linked(nONE)
l.prepend(nTWO)
l.append(new Node('c'))
l.prepend(new Node('d'))
l.traverse(l.getHead())



l.InsertAfter('a', new Node('f'))
l.traverse(l.getHead())

l.InsertBefore('a', new Node('e'))
l.traverse(l.getHead())