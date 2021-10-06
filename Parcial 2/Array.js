// Array.

// var arreglo = ["perro", "ok", 5.5, true, false, 1, "jaja", "8"]

// console.log(arrelgo[0])
// console.log(arreglo.length);

// for(var i = 0; 1 < arreglo.length; i++){
//     console.log(arreglo[i]);
// }

// asociativo / Clave valor.

// var humano = {
//     nombre : "Alex",
//     apellido : "Cordoba",
//     edad : 26,
//     casado : false
// }

// console.log(humano);
// console.log(humano["apellido"]) //la clave siempre va con ""
// console.log(humano["edad"])
// console.log(humano["casado"])

//------------------------------------------------------------------------------------------------------------------------


var arreglo = ["perro","ok",5.5,true,false,1,"jajaja","jeje",8,"5"]
console.log (arreglo[11]) //Para imprimir un valor se coloca el 
//console.log (la variable, el nombre de la variable[entre llaves la posición])
var  nombres  =  [ "oki" , "okix2" ] ;

var  animales  =  [ "perro" , "gatox2" , "perrox2" , "gato" , "pajaro" , "elefante" , nombres ] ;

var  perro  =  [ "perro" , "ok" , 5.5 , verdadero , falso , 1 , "jaja" , "jeje" , 8 , .5 , falso , verdadero , "ju" , animales ] ;

for (var i = 0; i < perro.lenght; i++){ //recorre los elementos
    console.log(perro[i]);
}

//los arreglos guardan información temporal
//Una coma hace la separación de elementos
//Las posiciones inician desde 0
//cuando un número está entre "" lo que hace es ser texto, cuanso va sin comillas es un número como tal
//Ninguno tiene relación entre sí, no es forzoso
//Los arreglos basicamente son una caja y dentro puede haber de todo, solo incian con []

//.lenght la cantidad de elementos que tiene la variable/arreglo
//el .lenght no toma el 0, por eso debemos de poner -

// ASOCIATIVO

var  nombreCompleto  =  "Emmanuel Torres Servin" ;

var  humano  =  {
"nombre" : nombreCompleto ,
"apellido" : "Torres" ,
"edad" : 26 , 
"Casado" : falso ,
"saludo" : "hola" ,
"musica" : {
    "rock" : {
        "genero" : "alternativo" ,
        "bandas" : {
            "bandauno" : "Interpol" ,
            "bandados" : "Arctick" ,
        }
    } ,
    "electronica" : "psytrance" ,
} ,
"cosas" : perro ,
}
consola . log ( humano ) ;

//otro ejemplo




