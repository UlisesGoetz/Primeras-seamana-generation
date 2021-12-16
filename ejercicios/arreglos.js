//const arreglo1 = ["hola",1,true];

//manera mas moderna de declararlos
//const arreglo2 = Array (1,"hola",true);
//manera tres y mas antigua
//const arreglo3 = new Array(3,true."hola");

const frutas =["manzana","naranajas","uvas","sandia",[1,2,3,4,5]];
console.log(frutas[1]);
console.log(frutas[4][4]);
console.log(frutas.length);
//elimina el ultimo elemento
frutas.pop();
//elimina el primer elemento
frutas.unshift();
console.log(frutas);
