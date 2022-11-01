let a, b, c, d, aux;
aux=0;

function primos(a)  {
  b=0;
  while(a > 0){
    b = b+1;
    c = 0;
    d= 0;
    while(c <= b) {
      if(b % c == 0){
        d++;
      }
      c++
    }
    if (d == 2){
      console.log(b);
      a--;
    }
  }
}
a = 11;
primos(a);