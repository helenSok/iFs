module.exports = (sequelize, DataTypes) => {
  const races = sequelize.define(
    "races",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING }
    },
    {
      timestamps: false,
    }
  )
  races.associate = (models) => {
    races.hasMany(models.materials, { as: "materials", onDelete: "cascade", foreignKey: "race_id" })
  }
  return races
}
