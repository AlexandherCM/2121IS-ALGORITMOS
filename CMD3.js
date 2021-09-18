//codigo 1
console.log('CODE 1')
console.log("OPTIMO PARA ACREDITAR UNA BECA.")

var candidato = "JUAN"
var JUAN = 9.7
var nota = 9.5 

switch(nota){
    case 9.5:
        if(JUAN >= nota){
            console.log(candidato + " ES ACREDOR A SER BENEFICIARIO.")
        }else{
            console.log(candidato + " NO ES ACREDOR A SER BENEFICIARIO.")
        }
}

//codigo 2
console.log('CODE 2')
console.log("SUBSIDIO A EMPLEADOS DE ISR.")

var Sueldo_de_Erick = 2700.70
var limite_superior = 3561.90
var Nombre = "ERICK" 

switch(Nombre){
    case "ERICK":
        if(Sueldo_de_Erick < limite_superior){
            console.log("El trabajador tiene un subsidio de: ")
        }else{
            console.log("Su tasa de subsidio pertenece a otro limite DEL ISR.")
        }
}

console.log(limite_superior - Sueldo_de_Erick)

//codigo 3
console.log('CODE 3')
console.log("IVA POR PAGAR O POR ACREDITAR.")

var IVA_trasladado = 2000
var IVA_acreditable = 1500 
var Persona_Empresaria = "AARON"

switch(Persona_Empresaria){
    case "AARON":
        if(IVA_trasladado < IVA_acreditable){
            console.log("El empresario tiene derecho a cobrar un IVA por acreditar.")
        }else{
            console.log("El empresario tiene un cargo de IVA por pagar.")
        }
}
console.log("El IVA por pagar es un monnto de: ")
console.log(IVA_trasladado - IVA_acreditable)

//codigo 4
console.log('CODE 4')
console.log("QUE PRODUCTOS LLEVAN IEPS.")

var cocacola = "Poco saludable"
var bonafon = "Saludable"
var IEPS = "Poco saludable"
var Good = 'Saludable'

switch(IEPS){
    case cocacola: 
    if(bonafon == "Poco saludable"){
        console.log("bonafon es: " + IEPS)
    }else{
        console.log("bonafon es: " + Good)
    }
}
switch(IEPS){
    case cocacola: 
    if(cocacola == IEPS){
        console.log("La cocacola lleva IEPS.")
    }else{
        console.log("La cocacola no lleva IEPS.")   
    }
}

//codigo 5
console.log('CODE 5')
console.log("El valor de tu empresa.")

var ventas_anuales = 500000
var impuestos = 20000
var gastos_op = 200000
var utilidad = 280000
var perdida = 200000

switch(gastos_op){
    case perdida: 
    if(ventas_anuales > gastos_op + impuestos){
        console.log("SE OBTUVO UTILIDAD.")
    }else{
        console.log("SE OBTUVO UNA PERDIDA.")
    }
}

