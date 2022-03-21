"use strict";

const { STRING, INTEGER } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true, //false, 
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
      unique: "users_email_unique"
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    active_status: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //false, 
      defaultValue: 0
    },
    dark_mode: {
      type: DataTypes.BOOLEAN,
      allowNull: true, //false, 
      defaultValue: 0
    },
    messenger_color: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
      defaultValue: "#2180f3"
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true, //false, 
    },
    Leaves: {
     type:DataTypes.JSON,
     allowNull:true
  },
    avatar: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
    lang: {
    type: DataTypes.STRING(255),
    allowNull: true, //false, 
  },
    last_login: {
    type: DataTypes.DATE,
    allowNull: true
  },
    is_active: {
    type: DataTypes.INTEGER,
    allowNull: true, //false, 
    defaultValue: 1
  },
    created_by: {
    type: DataTypes.STRING(255),
    allowNull: true, //false, 
  },
    remember_token: {
    type: DataTypes.STRING(100),
    allowNull: true
  }

  });


return users;
};