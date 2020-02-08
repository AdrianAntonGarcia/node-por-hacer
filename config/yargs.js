const opcionesCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};
const opcionesActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por actualizar'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};
const opcionesBorrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por borrar'
    }
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', opcionesCrear)
    .command('actualizar', 'Actualiza el estrado completado de una tarea', opcionesActualizar)
    .command('borrar', 'Borra la tarea pasada como descripcion', opcionesBorrar)
    .help()
    .argv;

module.exports = { argv };