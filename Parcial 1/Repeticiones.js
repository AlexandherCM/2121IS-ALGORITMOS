// ++ es igual a sumale 1 mas. 

var i = 0 

while(i <= 10){
    console.log(i);
    i++;
}


var i = 0

while(i >= 10){
    console.log(i);
    i--;    //-- incremento // ++ Decremento
}
    
var num = parseInt(prompt("Ingrese el numero"))
while(num != 0){
    num = parseInt(prompt("Ingrese otro numero"))
}

// Cuando no se cual es la cantidad. 
var num = parseInt(prompt("Ingrese el numero"))
while(num == 0){
    num = parseInt(prompt("Ingrese otro numero"))
}

// Se ocupa cuando si conozco la cantidad.  
for(var z = 1; z <= 10; z++){
    console.log(z)
}

// calculadora. 

for(var x = 1; x <= 10; x++){
    for(var y = 1; y <= 10; y++){
        consoles.log(x + "x" + y + "=" + x * y); 
    }
}

