module.exports = (sequelize, DataTypes) => {
  const exercise_settings = sequelize.define(
    "exercise_settings",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      execute_time: { type: DataTypes.STRING },
      material_count: { type: DataTypes.INTEGER },
      actual: { type: DataTypes.INTEGER },
      created: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      timestamps: false,
    }
  )
  exercise_settings.associate = (models) => {
    exercise_settings.belongsTo(models.material_types, { as: "material_types", foreignKey: "material_type_id" })
    exercise_settings.belongsTo(models.exercises, { as: "exercises", foreignKey: "exercise_id" })
    exercise_settings.belongsTo(models.exercise_types, { as: "exercise_types", foreignKey: "exercise_type_id" })
    exercise_settings.belongsTo(models.exercise_levels, { as: "exercise_levels", foreignKey: "level_id" })
  }
  return exercise_settings
}
