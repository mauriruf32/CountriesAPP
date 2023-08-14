const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Activity', {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        difficulty: {
          type: DataTypes.ENUM('1','2','3','4','5'),
          allowNull: false
      },
        duration: {
          type: DataTypes.STRING,
          allowNull: false
      },
        season: {
          type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'), 
          allowNull: false
      },
      countries: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
  },{
      timestamps: false
  })
}