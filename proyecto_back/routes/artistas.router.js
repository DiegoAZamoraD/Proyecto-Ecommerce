const express = require("express")
const router = express.Router()
const artistasController = require("../controllers/artistas.controller")

router.post("/", artistasController.create)

module.exports = router