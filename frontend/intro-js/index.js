

// Console

/**
 * Comentario en Bloque
 */
console.log("Hello World")
console.info("Info")
console.error("Error")
console.warn("Alerta")

let nombre="Juan"
let apellido="Arroyave"
const edad=50
var color="blanco"
let altura
let nombre_completo= nombre + ' ' + apellido
let nombre_completo2 = `${nombre} ${apellido}`
console.log('nombre_completo', nombre_completo)
console.log( 'nombre_completo', nombre_completo2)
let esta_vivo = true

console.log(altura);

if(edad>49){
    let nombre ="Otro Nombre"
    console.log("Dentro de if", nombre, color)
    var color ="otro Color"
    console.log(color);
}
console.log(nombre,color)

//altura=null
altura = 'true'
if(altura){
    console.log('Segunda Validación')
}else{
    console.log('Segunda Validación', altura)
}

let num1=parseInt('1')
let num2=parseInt('2')
console.log(num1+num2);