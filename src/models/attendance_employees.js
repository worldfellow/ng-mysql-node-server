const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attendance_employees', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    clock_in: {
      type: DataTypes.TIME,
      allowNull: false
    },
    clock_out: {
      type: DataTypes.TIME,
      allowNull: false
    },
    late: {
      type: DataTypes.TIME,
      allowNull: false
    },
    early_leaving: {
      type: DataTypes.TIME,
      allowNull: false
    },
    overtime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    total_rest: {
      type: DataTypes.TIME,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'attendance_employees',
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
