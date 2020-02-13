
console.log(" ------------------CRUD ESTUDIANTES----------------------------")



let estudiantes=[]
let miEstudiante={};
let jsonArray;



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
    miEstudiante = {id,nombre,apellido,edad,carrera,correo}    
    //console.log(miEstudiante)
    //return miEstudiante
    //showArray(jsonArray,idTable);
}   

function crearEstudiantes() {
    let estudiante = obtenerValores()
    estudiantes.push(estudiante)
    //console.log(estudiantes)
}

/*function getStudent() {
    return estudiantes;
}*/

jsonArray = JSON.stringify(estudiantes);

function showArray(jsonArray, idTable) {
    var array = JSON.parse(jsonArray)
    var table = document.getElementById(idTable);
    for (var i = 0; i < array.length; i++) {
        var row = table.insertRow(i+1);
        var x = 0; 
        for (var index in array[i]) {
            var cell = row.insertRow(x);
            cell.innerHTML = array[i][index]
            x++;
        }
    }
    return table;
}

/*function drawTable() {
    var list = getStudent();
    var tbody = document.querySelector('Estudiantes tbody');
    tbody.innerHTML='';
    for (var i = 0; i < list.length; i++) {
        var row = tbody.insertRow(i);
        var idcell = row.insertCell(0); 
        var namecell = row.insertCell(1); 
        var apellidocell = row.insertCell(2); 
        var edadcell = row.insertCell(3); 
        var carreracell = row.insertCell(4);
        var correocell = row.insertCell(5);       
        idcell.innerHTML = list[i].id
        tbody.appendChild(row);    
    }
}*/