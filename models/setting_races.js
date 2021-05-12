module.exports = (sequelize, DataTypes) => {
  const setting_races = sequelize.define(
    "setting_races",
    {},
    {
      timestamps: false,
    }
  )
  setting_races.associate = (models) => {
    models.races.belongsToMany(models.exercise_settings, { through: setting_races, foreignKey: "race_id" })
    models.exercise_settings.belongsToMany(models.races, { through: setting_races, foreignKey: "setting_id" })
    models.exercise_settings.hasMany(setting_races, { as: "setting_races", foreignKey: "setting_id" })
  }
  return setting_races
}
