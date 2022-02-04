const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    branch_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    designation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_doj: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    documents: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_holder_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    account_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bank_identifier_code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    branch_location: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tax_payer_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    salary_type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    salary: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    is_active: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    emergency_contact_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    relationship_to_self: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    contact_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blood_group: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    any_major_health_problem: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    allergies: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    regular_medication: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    marital_status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employees',
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
