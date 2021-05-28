const db = require("../models")

module.exports.getAll = async (req, res) => {
  console.log(req.query)
  await db.sequelize
    .query("call get_exercises(:user_id, :exercise_type_id)", {
      replacements: {
        user_id: req.query.user_id,
        exercise_type_id: req.query.exercise_type_id,
      },
    })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
}
