module.exports = (sequelize, DataTypes) => {
  const materials = sequelize.define(
    "materials",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      uri: { type: DataTypes.STRING },
      age: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  )
  materials.associate = (models) => {
    materials.belongsTo(models.material_types, { as: "material_types", foreignKey: "type_id" })
  }
  return materials
}
