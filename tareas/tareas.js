const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    
    escribirJSON: function (tareasArray){
    let datosConvertidos = JSON.stringify (tareasArray);
    fs.writeFileSync((this.archivo, datosConvertidos ));
    }
}


function leerPorEstado (estado) {
    let datosJSON = leerJSON;
    let tareasRequeridas = archivoTareas.filter (
        funtion (n) {
            return (estado = archivoTareas.estado);
    }) ;
    return (tareasRequeridas);
};

module.exports = archivoTareas;