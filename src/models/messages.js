const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('messages', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    from_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    to_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'messages',
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
