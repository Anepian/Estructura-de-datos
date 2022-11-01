export { Linked, Node }
import Node from './node.js'

function Linked(n) {
  this.head = n
  this.tail = n
  this.size = 1
  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter = InsertAfter
  this.InsertBefore = InsertBefore
}

function getHead() {
  return this.head
}

function prepend(n) {
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

function contains(v) {
  let c = this.head
  let enc = "";
  while (c) {
    if (v == c.data) {
      enc = c.data
    }
    c = c.next
  }
  return enc

}
function getTail() {
  let c = this.head
  var t = ""
  while (c) {
    t = c.data
    c = c.next
  }
  return t
}

function InsertAfter(v, o) {
  let c = this.head
  let aux;
  while (c) {
    if (v == c.data) {
      aux = c.next
      c.next = o
      o.next = aux
    }
    c = c.next
  }
}

function InsertBefore(v, o) {
  let c = this.head
  let prev, aux
  if (c.next == null) {
    this.prepend(o)
  } else {
    if (v != this.head.data) {
      while (c) {
        if (v != c.data) {
          prev = c
        } else {
          aux = prev.next
          prev.next = o
          o.next = aux
        }
        c = c.next
      }
    } else {
      this.prepend(o)
    }
  }
}