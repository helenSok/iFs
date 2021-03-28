module.exports = (sequelize, DataTypes) => {
  const parameters = sequelize.define(
    "parameters",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
      description: { type: DataTypes.STRING },
      image_uri: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
    }
  )
  parameters.associate = (models) => {
    parameters.belongsTo(models.parameters, { as: "parameters",  foreignKey: "parameter_id" })
  }
  return parameters
}
