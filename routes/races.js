const express = require("express")
const router = express.Router()
const controller = require("../controllers/races")

router.get('/races', controller.getAll)

module.exports = router
