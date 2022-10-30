const Obra = require("../models/obras.model");
let response ={
    msg: "",
    exito: false
}

// Función para crear una nueva obra en la base de datos:
exports.create = function(req,res){
    let obra = new Obra({
        obra_id: req.body.obra_id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        dimension: req.body.dimension,
        tecnica: req.body.tecnica,
        anio: req.body.anio,
        descripcion: req.body.descripcion
    })

    obra.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar la obra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La obra se guardó correctamente"
        res.json(response)
    })
}

// Función listar obras de la base de datos:
exports.find = function(req, res){
    Obra.find(function(err, obras){
        res.json(obras)
    })
}

// Función encontrar una obra de la base de datos por id:
exports.findOne = function(req, res){
    Obra.findOne({_id: req.params.id}, function(err, obra){
        res.json(obra)
    })
}

// Función modificar obra:
exports.update = function(req, res){
    let obra = {
        obra_id: req.body.obra_id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        dimension: req.body.dimension,
        tecnica: req.body.tecnica,
        anio: req.body.anio,
        descripcion: req.body.descripcion
    }

    Obra.findByIdAndUpdate(req.params.id, {$set: obra}, function(err){
        if(err){
            console.error(err),
            response.exito = false,
            response.msg = "Error al modificar la obra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La obra fue modificada correctamente"
        res.json(response)
    })
}

// Función eliminar obra:
exports.remove = function(req, res){
    Obra.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err)
            response.exito = false,
            response.msg = "Error al eliminar la obra"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "La obra ha sido eliminada correctamente"
        res.json(response)
    })
}