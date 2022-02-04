const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appraisals', {
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
    employee: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    appraisal_date: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'appraisals',
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
