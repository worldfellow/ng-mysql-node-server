const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('indicators', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    branch: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    designation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    customer_experience: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    marketing: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    administration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    professionalism: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    integrity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    attendance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'indicators',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
