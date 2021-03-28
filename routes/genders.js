const express = require("express")
const router = express.Router()
const controller = require("../controllers/genders")

router.get('/genders', controller.getAll)

module.exports = router