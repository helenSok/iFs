const express = require("express")
const router = express.Router()
const controller = require("../controllers/parameters")

router.get('/parameters', controller.getAll) //Пользовательские настройки упражнения
router.put('/parameters/:id', controller.update)

module.exports = router