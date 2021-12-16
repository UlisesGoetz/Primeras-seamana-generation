/*
ciclos-bucles-loops
while
do while
for

*/
//while
/*
let condicion = 1; //valor inicial
while(condicion){
  tu codigo
}
*/
//imprimir todos los numeros del 1 al 100
let condicion = 0;
while (condicion <= 100){
  //console.log(condicion);
  condicion=condicion + 2;
}
let numero=1;
do{
  //console.log(numero);
  numero ++;
}
while (numero <= 10);
//for
for (let control = 0; control <= 10; control++) {
  console.log(control);
}
const comidas = ["pozole","tacos","tamales","tortas"];
for (var i = 0; i < comidas.length; i++) {
  console.log(comidas[i]);
}
