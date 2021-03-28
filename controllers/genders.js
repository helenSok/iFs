const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.genders
    .findAll()
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err)
    })
}
