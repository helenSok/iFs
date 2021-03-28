module.exports = (sequelize, DataTypes) => {
  const exercise_types = sequelize.define(
    "exercise_types",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
      short_name: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
    }
  )
  exercise_types.associate = (models) => {
    exercise_types.hasMany(models.exercise_settings, { as: "exercise_settings", onDelete: "cascade", foreignKey: "exercise_type_id" })
  }
  return exercise_types
}
