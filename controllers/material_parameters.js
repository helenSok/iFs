const db = require("../models")
const material_parameters = require("../models/material_parameters")

module.exports.getAll = async (req, res) => {
  await db.material_parameters
    .findAll({
      where: { material_id: req.query.material_id },
    })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
}
