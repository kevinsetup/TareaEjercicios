var x = Number(prompt("Introduzca su número : "));
document.write(" El Factorial de " + x + " es " + Factorial(x)) ;




function Factorial(x){
    var tot = 1;
    for(i = 1; i<=x;i++){
    tot = tot * i;
    
    }
    return tot;
    }