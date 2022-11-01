function Node(o) {
  this.d = o
  this.l = null
  this.r = null
}
function preorder(n) {
  if (n) {
    console.log(n.d)
    preorder(n.l)
    preorder(n.r)
  }
}
let p = new Node('+')
let o1 = new Node(3)
let o2 = new Node('/')
p.l = o1;
p.r = o2;
let q1 = new Node(2)
let q2 = new Node(7)
o2.l = new Node(2)
o2.r = new Node(7)

preorder(p)