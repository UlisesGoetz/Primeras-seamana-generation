

let subTotal = parseInt(prompt("Ingresa tu pago"));
function cajaRegistradora(){
    if(subTotal < 100) {
        subTotal *= 0.9;
    }
    else if (subTotal >= 100 && precio < 200) {
        subTotal *= 0.8;
    }
    else {
        subTotal *= 0.7;
    }
return subTotal


}

let preciofinal = cajaRegistradora(subTotal);


  document.write("<h1>"+"El total de tu compra: "+preciofinal+"</h1>");
