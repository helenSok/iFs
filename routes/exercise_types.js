const express = require("express")
const router = express.Router()
const controller = require("../controllers/exercise_types")

router.get('/exercise_types', controller.getAll) //Пользовательские настройки упражнения

module.exports = router
