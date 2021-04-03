module.exports = (sequelize, DataTypes) => {
  const genders = sequelize.define(
    "genders",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  )
  genders.associate = (models) => {
    genders.hasMany(models.materials, { as: "materials", onDelete: "cascade", foreignKey: "gender_id" })
  }
  return genders
}
