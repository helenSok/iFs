const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.exercise_settings
    .findAll({
      where: {
        actual: 1,
        user_id: 1, //todo
      },
    })
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err)
    })
}
