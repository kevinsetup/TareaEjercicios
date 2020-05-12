var nombre  = prompt("¿Tú nombre?");
alert("Hola " + nombre);
var edad = Number(prompt("Tu edad"));
if(edad < 16){

    alert("Usted no puede trabajar :c");
}else{
var salario = Number(prompt("Tu salario")); 
if(edad >= 16 &&  edad <= 18){
document.write(nombre + " Tu salario es " + salario);

}else if(edad >= 19 && edad <=50){
var comision = salario * 0.05;
document.write(nombre +  " Tu salario es " + (salario + comision));
}else if(edad >=51 && edad <= 60){
var comision = salario * 0.10;
document.write(nombre + " Tu salario es " + (salario + comision));

}else if(edad > 60){
    var comision = salario * 0.15;
    document.write(nombre + " Tu salario es " + (salario + comision));
}



}