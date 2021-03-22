let {Sequelize, DataTypes} = require("sequelize");
let db = require("./db");

const ambientacao = db.define("ambientacao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        propostas: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagens: DataTypes.INTEGER
        allowNull: false
    }
);

module.exports = ambientacao;