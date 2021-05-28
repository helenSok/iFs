const db = require("../models")

module.exports.getAll = async (req, res) => {
  await db.sequelize
    .query("select * from v_exercise_types", {
      type: db.sequelize.QueryTypes.SELECT, //необходимо чтобы не было масисва в массиве
    })
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
}
