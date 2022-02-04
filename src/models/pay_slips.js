const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_slips', {
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
    net_payble: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    salary_month: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    basic_salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    allowance: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    commission: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    loan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    saturation_deduction: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    other_payment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    overtime: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pay_slips',
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
