const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.parameters.findAll().then((result) => {
    res.send(result)
  })
}

module.exports.update = async (req, res) => {
  await db.parameters.update({ name: req.query.name }, { where: { id: req.params.id } }).then((result) => {
    res.send(result)
  })
  //await db.parameters.findAll().then(result => {res.send(result)})
}
