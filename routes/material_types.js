const express = require("express")
const router = express.Router()
const controller = require("../controllers/material_types")

router.get("/material_types", controller.getAll) //Пользовательские настройки упражнения

module.exports = router
