const express = require("express")
const router = express.Router()
const controller = require("../controllers/material_parameters")

router.get("/material_parameters", controller.getAll) //Пользовательские настройки упражнения

module.exports = router
