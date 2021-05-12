const express = require("express")
const router = express.Router()
const controller = require("../controllers/exercise_settings")

router.get("/exercise_settings", controller.getAll) //Пользовательские настройки упражнения

module.exports = router
