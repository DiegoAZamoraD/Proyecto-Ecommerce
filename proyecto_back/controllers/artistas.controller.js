// Aqui le estoy diciendo que en artista estoy llamando a la tabla de artistas:
const Artista = require("../models/artistas.model") 
// Aqui le estoy diciendo que si funciono me envie el mensaje
let response ={ 
    msg:"",
    exito: false
}

// Creamos una funcion que me guarde los datos de la tabla:
exports.create = function(req,res){ //creo un nuevo artista
    let artista = new Artista({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    artista.save(function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al guardar el artista"
            response.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El artista se guardo correctamente"
        res.json(response) //Se corrige el error de sintaxis, ya que no es reponse.jason sino res.jason
    })
}