const express = require("express")
const router = express.Router()
const artistasController = require("../controllers/artistas.controller")

//Crear un artista:
router.post("/", artistasController.create)

//Listar todos los artistas:
router.get("/", artistasController.find)

//Encontrar por id un artista:
router.get("/:id", artistasController.findOne)

//Modificar un artista:
router.put("/:id", artistasController.update)

//Eliminar un artista:
router.delete("/:id", artistasController.remove)

module.exports = router