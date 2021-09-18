// Codes of if/else, switch // Alexandher Cordoba.

// Codigo 1
console.log("CODE 1")

console.log("Resultados universidad.")

var puntaje_mininmo = 80;
var puntaje_obtenido = 93

if(puntaje_obtenido>puntaje_mininmo){
    console.log("Aspirante aceptado.")
}else{
    console.log("Aspirante no aceptado.")
};

//Codigo 2
console.log("CODE 2")

console.log("Records mundiales.")

var PA = 30000 + " Puntos"
var NP = 50000 + " Puntos"

if(PA < NP){
    console.log("RECORD SUPERADO.")
}else{
    console.log("RECORD NO SUPERADO.")
};
console.log("Nuevo puntaje: " + NP)

// Codigo 3
console.log('CODE 3')

var certificado = 1
var constancia = 1 

console.log("Resquisitos: ");
console.log("Certificado medico y Constancia de estudios");

if(certificado + constancia == 2){
    console.log("Correcto.")
}else{
    console.log("Incorrecto.")
};

// Codigo 4
console.log("CODE 4")

console.log("Estado de resultados.")

var ventas_totales = 150000
var gastos = 15000
var impuestos = 5000

if(ventas_totales - gastos + impuestos > 75000){
    console.log("Se obtuvo una utilidad sobre el ejercicio.")
}else{
    console.log("Se obtuvo una perdida sobre el ejercicio.")
};

// Codigo 5
console.log("CODE 5") 

console.log('Temperatura saludable.')

var bueno = 36.1
var malo = 37.2 
var temperatura = 36.4

if(temperatura >= malo){
    console.log(malo + " Grados. Altas probabilidades de tener covid.")
}else{
    console.log(temperatura + " Grados. Temperatura corporal saludable.")
};
