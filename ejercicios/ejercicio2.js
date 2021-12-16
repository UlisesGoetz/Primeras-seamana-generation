const numeros =[1, 4, 7, 9, 19, 15, 46, 27, 40, 123];//vector de la tarea
const resultado =[]; //aqui se guarda el resultado
const contadorDinamico=[]; //un contador que crece en relacion con los otros

//Siclo para realizar el contador
for (var i = 0; i < numeros.length; i++) {
  contadorDinamico[i]=i;
}
  console.log(contadorDinamico);//Probar si funciona el contador en la consola


//Proceso de multiplicar el vector y guardarlo en resultado
for (var i = 0; i < numeros.length; i++) {
  resultado[i]= numeros[i]*2;//Se multiplaca cada elemento del vector y se guarda en un espacio del vector "resultado"
  document.write("<h1>"+"El numero en la posicion  "+contadorDinamico[i]+" es: "+ resultado[i]+"</h1>");
}
console.log(resultado);//Prueb en consola
