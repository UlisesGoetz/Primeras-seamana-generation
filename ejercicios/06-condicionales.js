/* condicionales
*/
let edad = parseInt(prompt("Ingresa tu edad"));
if(edad >= 18 && edad <= 30){
  document.write("Eres un joven");

}  else if(edad >= 30 && edad <60) {
    document.write("Eres un adulto mayor");
  }
  else if(edad >= 60) {
      document.write("Eres un abuelo");

    }
    else {
      document.write("Eres un niño");
    }
