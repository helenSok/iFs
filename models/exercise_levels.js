module.exports = (sequelize, DataTypes) => {
  const exercise_levels = sequelize.define(
    "exercise_levels",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
    }
  )
  exercise_levels.associate = (models) => {
    exercise_levels.hasMany(models.exercise_settings, { as: "exercise_settings", onDelete: "cascade", foreignKey: "level_id" })
  }
  return exercise_levels
}