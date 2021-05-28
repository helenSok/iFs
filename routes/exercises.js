const express = require("express")
const router = express.Router()
const controller = require("../controllers/exercises")
const db = require("../models")

router.get("/exercises/settings/users", controller.getAll) //Пользовательские настройки упражнения
// router.get("/exercises/settings/users/:id", (req, res) => {
//   db.sequelize
//     .query("select * from exercises", {
//       model: db.exercises,
//     })
//     .then((result) => res.send(result))
// }) //Пользовательские настройки упражнения

// const projects = await sequelize.query("SELECT * FROM projects", {
//   model: Projects,
//   mapToModel: true, // pass true here if you have any mapped fields
// })

module.exports = router
