

const { leerJSON, escribirJSON } = require('./tareas');
let archivoTareas = require('./tareas');

let accion = process.argv[2];


//En segundo lugar tendremos que crear una alternativa dentro de nuestro “switch” 
//Acá deben tomar el parametro enviado por el usuario que servirá para ejecutar la función
// que va a escribir la nueva tarea.

function guardarTarea (tareasNew) {
let datosJSON = leerJSON;
tareasArray.push(datosJSON, tareasNew);
return (escribirJSON (tareasArray));
};


switch(accion) {
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();

        tareas.forEach((element, indice) => {
            console.log((indice+ 1) + " - " + element.titulo + ' - ' + element.estado );
        });

         // for (let i = 0;  i < tareas.length; i++) {
         //   console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
         // }
        break;

    case "Guardar":
        console.log('Se guardo correctamente tu nueva tarea');
        archivoTareas.escribirJSON ("Hola");

        case "Crear":
            console.log('Se creo correctamente tu nueva tarea');
            let creacion = ( {
                titulo: undefined,
                estado: "Pendiente"
            }) ;
            guardarTarea (creacion);
            archivoTareas.escribirJSON ("Hola");

        
        // let datoNuevo = ;
        // let datosConvertidos = JSON.stringify ( datoNuevo );
        
         break;
    

 
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

 
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}
