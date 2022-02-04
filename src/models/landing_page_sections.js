const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('landing_page_sections', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    section_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    section_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    section_type: {
      type: DataTypes.ENUM('section-1','section-2','section-3','section-4','section-5','section-6','section-7','section-8','section-9','section-10','section-plan'),
      allowNull: false
    },
    default_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    section_demo_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    section_blade_file_name: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'landing_page_sections',
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
