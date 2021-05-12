const express = require("express")
const router = express.Router()
const controller = require("../controllers/materials")

router.get("/materials", controller.getAll)
router.get("/materials/rnd", controller.getRndMaterial)
router.get("/materials/:id", controller.getById)
module.exports = router
