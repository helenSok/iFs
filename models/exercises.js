module.exports = (sequelize, DataTypes) => {
  const exercises = sequelize.define(
    "exercises",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      name: { type: DataTypes.STRING },
      purpose: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      uri: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  )
  exercises.associate = (models) => {
    exercises.hasMany(models.exercise_settings, { as: "exercise_settings", onDelete: "cascade", foreignKey: "exercise_id" })
  }
  return exercises
}
