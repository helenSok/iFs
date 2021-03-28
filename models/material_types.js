module.exports = (sequelize, DataTypes) => {
  const material_types = sequelize.define(
    "material_types",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
    }
  )
  material_types.associate = (models) => {
    material_types.hasMany(models.exercise_settings, { as: "exercise_settings", onDelete: "cascade", foreignKey: "material_type_id" })
  }
  return material_types
}
