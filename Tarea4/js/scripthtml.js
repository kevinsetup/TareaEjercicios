function Calcular(){
  
var x = Number(document.getElementById("N1").value);
var y =  Number(document.getElementById("N2").value);
var operacion = document.getElementById("operacion").value;
switch(operacion){
      case '1':
      document.getElementById("resultado").value = Number(suma(x,y));
      break;
      case '2':
        document.getElementById("resultado").value = Number(resta(x,y));
      break;
      case '3':
        document.getElementById("resultado").value = Number(Multi(x,y));
      break;
      case '4':
        document.getElementById("resultado").value = Number(Divi(x,y));
      break;
      case '5':
        document.getElementById("resultado").value = Number(Factorial(x));
      break;
      case '6':
        document.getElementById("resultado").value = Number(Exponencial(x,y));
      break;
      case '7':
        document.getElementById("resultado").value = Number(raiz(x,y));
      break;
}
}

function suma(x,y){
    return x+y;
    
    }
    function resta(x,y){
    return x-y;
    
    }
    function Multi(x,y){
    
        return x*y;
    }
    function Divi(x,y){
    if(y == 0){
        alert('No se puede dividir por 0');
    }else{
        return x / y;
    }
    }
    function Factorial(x){
    var tot = 1;
    for(i = 1; i<=x;i++){
    tot = tot * i;
    
    }
    return tot;
    }
    
    function Exponencial(x,y){
    return Math.pow(x,y);
    
    
    }
    function raiz(x,y){
    return Math.pow(x,1/y);
    
    }