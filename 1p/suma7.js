 // Sumar los multiplos de 7 del 200 a 300


let a, b, i;
a=0;
for(i=200;i<=300;i++){
  if(i%7==0){
    a= i + a;
  }
}
console.log("La suma de los multiplos es igual a: "+ a);