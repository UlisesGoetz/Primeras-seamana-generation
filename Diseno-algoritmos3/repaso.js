//repaso
const comidas =["pozole","quesadilla","Tacoas"];+
//lenght
//console.log(comidas.length);
/*
push -agrega al final
pop-quita el ultimo elemento
unshift-agrega al inicio
shift-quita un elemento al inicio
*/
comidas.push("torta");
//console.log(comidas);
/* Nos sirve para realiar una accion por cada elemento
forEach
*/
comidas.forEach(function(el) {
//console.log(el);
});


const numeros = [1,4,7,9];
//console.log(numeros);
numeros.forEach(function(el) {
let suma = el + 1;
//console.log(suma);
});

const arr=[];
console.log(arr);
function suma (num){
  let sumNum=num+1;
  return arr.push(sumNum);

}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78);
console.log(arr);
