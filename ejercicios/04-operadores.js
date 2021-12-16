/*
+suma
-resta
*multiplicacion
%residuo
/division
*/
const numero1 = prompt("ingresa el numero 1");
const numero2 = prompt("ingresa el numero 2");;
const suma=parseInt(numero1) + parseInt(numero2);
const multiplicacion = parseInt(numero1) * parseInt(numero2);
const resta = parseInt(numero1) - parseInt(numero2);
const division = parseInt(numero1) / parseInt(numero2);
const residuo = parseInt(numero1) % parseInt(numero2);
console.log("Numero1 y Numero2 son: "+numero1+" y "+ numero2 + "\n suma:"+suma+"\n multiplicacion: "+multiplicacion+"\n resta:"+resta+"\n division:"+division+"\n Residuo:"+residuo);
