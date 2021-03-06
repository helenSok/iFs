const express = require("express")
const app = express()

var bodyParser = require("body-parser")
const db = require("./models")
const PORT = process.env.PORT || 5000

app.use("/uploads", express.static("uploads"))
app.use(bodyParser.json())
app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: false }))

var exercises_routes = require("./routes/exercises")
app.use("/v1/api", exercises_routes)

var exercise_settings_routes = require("./routes/exercise_settings")
app.use("/v1/api", exercise_settings_routes)

var parameters_routes = require("./routes/parameters")
app.use("/v1/api", parameters_routes)

var exercise_types_routers = require("./routes/exercise_types")
app.use("/v1/api", exercise_types_routers)

var materials_routers = require("./routes/materials")
app.use("/v1/api", materials_routers)

var material_parameters_routers = require("./routes/material_parameters")
app.use("/v1/api", material_parameters_routers)

var material_types_routers = require("./routes/material_types")
app.use("/v1/api", material_types_routers)

var races_routers = require("./routes/races")
app.use("/v1/api", races_routers)

var genders_routers = require("./routes/genders")
app.use("/v1/api", genders_routers)

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`)
  })
})

this.master
