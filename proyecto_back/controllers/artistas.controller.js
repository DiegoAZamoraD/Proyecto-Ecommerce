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

// Función listar artistas de la base de datos:
exports.find = function(req, res){
    Artista.find(function(err, artistas){
        res.json(artistas)
    })
}

// Función encontrar un artista por id:
exports.findOne = function(req, res){
    Artista.findOne({_id: req.params.id}, function(err, artista){
        res.json(artista)
    })
}

// Función modificar un artista por el id:
exports.update = function(req, res){
    let artista = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body. apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Artista.findByIdAndUpdate(req.params.id, {$set: artista}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar el artista"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El artista fue modificado correctamente"
        res.json(response)
    })
}

// Función eliminar artista:
exports.remove = function(req, res){
    Artista.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err)
            response.exito = false,
            response.msg = "Error al eliminar el artista"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El artista ha sido eliminado correctamente"
        res.json(response)
    })
}