const express = require("express")
const router = express.Router()
const controller = require("../controllers/exercises")

router.get('/exercises/settings/users/:id', controller.getAll) //Пользовательские настройки упражнения

module.exports = router
