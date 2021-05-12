const db = require("../models")

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

module.exports.getAll = async (req, res) => {
  await db.materials.findAll({ where: { type_id: 1 } }).then((result) => {
    res.send(result)
  })
}

module.exports.getRndMaterial = async (req, res) => {
  const type_id = req.query.type_id
  const setting_races = req.query.setting_races
  let where = {}
  if (type_id) {
    Object.assign(where, { type_id: req.query.type_id })
    //Object.assign(where, { gender_id: 2 })
  }
  if (setting_races) {
    Object.assign(where, { race_id: setting_races })
  }

  if (req.query.type_id) {
    const count = await db.materials
      .count({
        distinct: true,
        col: "materials.id",
        where,
      })
      .then((count) => {
        return count
      })
    const rnd = randomInt(count)
    await db.materials
      .findAll({
        limit: 1,
        offset: rnd,
        where,
      })
      .then((result) => res.send(result))
  }
  return
}

module.exports.getById = async (req, res) => {
  await db.materials.findAll({ where: { id: req.params.id } }).then((result) => {
    res.send(result)
  })
  //await db.parameters.findAll().then(result => {res.send(result)})
}
