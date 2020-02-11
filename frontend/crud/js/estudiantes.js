
console.log(" ------------------CRUD ESTUDIANTES----------------------------")



let estudiantes=[]


function obtenerValores() {
    let id = document.getElementById("id").value
    //console.log("Mi Id: ", id)

    let nombre = document.getElementById("nombre").value
    //console.log("Nombre: ", nombre)

    let apellido= document.getElementById("apellido").value
    //console.log("Apellido: ", apellido)

    let edad = document.getElementById("edad").value
    //console.log("Edad: ", edad)

    let carrera = document.getElementById("carrera").value
    //console.log("Carrera: ", carrera)

    let correo = document.getElementById("correo").value
    //console.log("Correo: ", correo)

    //PRIMERA FORMA
    //let miEstudiante = {}
    //miEstudiante.id = id
    //miEstudiante.nombre = nombre
    //console.log(miEstudiante)

    //SEGUNDA FORMA
    let miEstudiante = {id,nombre,apellido,edad,carrera,correo}
    console.log(miEstudiante)
    return miEstudiante
}   

function crearEstudiantes() {
    let estudiante = obtenerValores()
    estudiantes.push(estudiante)
    console.log(estudiantes)
}
