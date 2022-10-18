const Empleado = require("../models/empleados.model") // Aqui le estoy diciendo que en empleado estoy llamando a la tabla de empleados 
let response ={ // Aqui le estoy diciendo que si funciono me envie el mensaje
    msg:"",
    exito: false
}
// Creamos una funcion que me guarde los datos de la tabla

exports.create = function(req,res){ //creo un nuevo empleado 
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    empleado.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el empleado"
            response.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El empleado se guardo correctamente"
        response.json(response)
    })
}