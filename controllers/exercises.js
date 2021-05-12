const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.exercises
    .findAll({
      include: [
        {
          model: db.exercise_settings,
          as: "exercise_settings",
          where: {
            user_id: req.params.id,
            actual: 1,
          },
          include: [
            {
              model: db.setting_races,
              as: "setting_races",
            },
          ],
        },
      ],
    })
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err)
    })
}
