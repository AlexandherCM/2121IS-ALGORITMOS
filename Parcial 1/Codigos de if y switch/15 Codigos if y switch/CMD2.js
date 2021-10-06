//Alexandher Cordoba.

// codigo 1
console.log("CODE 1")
console.log("Asignacion de universidad segun el puntaje obtenido.")

var puntaje = 75
var UNAM = 85
var IPN = 100
var UAM = 75

switch(puntaje){
    case UNAM:
        console.log("ASIGNADO EN UNAM.")
        break;
        case IPN: 
        console.log("ASIGNADO EN IPN.") 
        break;
        case UAM:
            console.log("ASIGNADO EN UAM.")
        break;
        default:
            console.log("EL ASPIRANTE NO PUDO SE ASIGNADO EN NINGUNA OPCION.")
        break;
};

//codigo 2
console.log("CODE 2")
console.log("Color favorito.")

var color_fav = "ROJO."

switch(color_fav){
    case "ROJO.":
        console.log("CORRECTO " + "COLOR " + color_fav)
    break;
    case "AMARILLO.": 
    console.log('INCORRECTO.')
    break; 
    case "AZUL.":
        console.log(!"INCORRECTO.")
    break;
    default: 
    console.log("INCORRETO.")
}

//codigo 3
console.log("CODE 3")
console.log("Prima vacasional.")

var Time = "1 año"

switch(Time){
    case "5 meses":
        console.log("Le corresponde a Juan su prima vacacional.")
    break;
    case "8 meses": 
    console.log('Le corresponde a Edgar su prima vacacional.')
    break; 
    case "1 año":
        console.log("Le corresponde a Erick su prima vacacional.")
    break;
    default: 
    console.log("A ninguno le corrresponde aun su prima vacacional.")
}

//codigo 4
console.log("CODE 4")
console.log("Intervalos musicales.")

var SolSostenido = "3 tonos 1/2"   

switch(SolSostenido){
    case "4 tonos":
        console.log("INCORRECTO.")
        break;
        case "2 tono 1/2":
        console.log("INCORRECTO.")
        break; 
        case "3 tonos 1/2":
        console.log("CORRECTO, TIENE: " + SolSostenido)
        break;
}
//codigo 5
console.log("CODE 5")
console.log("Valor oficial redondeado de Pi.")

var Pi = 3.1415

switch(Pi){
    case 3.14:
        console.log("INCORRECTO.")
        break;
        case 3.1416:
        console.log("INCORRECTO.")
        break; 
        case 3.1415:
        console.log("CORRECTO, VALE: " + Pi)
        break;
}
