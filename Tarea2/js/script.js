//Sumar y contar pares
var sumarpar = 0;
var contarpares = 0;

//Sumar y contar impares
var sumarimpa = 0;
var contarimpa = 0;


//Sumar y contar positivos
var sumapos = 0;
var contarpos = 0;

//Sumar y contar negativos
var sumarnega = 0;
var contarnega = 0;

var contamet = 0;
var media = 0;


var respuesta = "S";

do{
var num = Number(prompt("Indroduzca su número"));

media += num;
contamet++;

if(num < 0){
alert("Su número es negativo");
sumarnega += num;
contarnega++;

}else{
    alert("Su número es positivo");
    contarpos++;
    sumapos+=num;


}
if(num%2 == 0 ){
alert("El numero es par");
contarpares++;
sumarpar+=num;


}else{
    alert("El numero es impar");
   sumarimpa=num;
   contarimpa++;

}

respuesta  = prompt("Desea introducir otro número?[S/N]").toUpperCase();


}while(respuesta == ("S"));
media = media /contamet;


document.write("La suma de los números negativos es : " + sumarnega + "<br>");
document.write("La suma de los números positivos es : " + sumapos + "<br>");
document.write("La suma de los pares es : " + sumarpar + "<br>");
document.write("La suma de los impares : " + sumarimpa + "<br>");
document.write("La cantidad de los negativos es : " + contarnega + "<br>");
document.write("La cantidad de los positivos es : " + contarpos + "<br>");
document.write("La cantidad de pares es  : " + contarpares + "<br>");
document.write("La cantidad de los impares es : " + contarimpa + "<br>");
document.write("La media de todos los números es : " + media + "<br>");
