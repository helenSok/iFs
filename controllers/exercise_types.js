const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.exercise_types
    .findAll()
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err)
    })
}
