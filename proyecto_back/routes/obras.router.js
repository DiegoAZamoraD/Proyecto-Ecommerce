const express = require("express")
const router = express.Router()
const obrasController = require("../controllers/obras.controller")

//Crear una obra en la base de datos:
router.post("/", obrasController.create)

//Listar todos las obras de la base de datos:
router.get("/", obrasController.find)

//Encontrar por id una obra en la base de datos:
router.get("/:id", obrasController.findOne)

//Modificar una obra por id:
router.put("/:id", obrasController.update)

//Eliminar una obra por id:
router.delete("/:id", obrasController.remove)

module.exports = router