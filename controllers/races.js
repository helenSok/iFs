const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.races
    .findAll()
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err)
    })
}
