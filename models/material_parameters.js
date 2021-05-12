module.exports = (sequelize, DataTypes) => {
  const material_parameters = sequelize.define(
    "material_parameters",
    {},
    {
      timestamps: false,
    }
  )
  // Materials.belongsToMany(FaceParams, {
  //   through: FaceParamMaterial,
  //   foreignKey: "id_face_param",
  // })
  material_parameters.associate = (models) => {
    models.materials.belongsToMany(models.parameters, { through: material_parameters, foreignKey: "material_id" })
    models.parameters.belongsToMany(models.materials, { through: material_parameters, foreignKey: "parameter_id" })
  }
  return material_parameters
}
