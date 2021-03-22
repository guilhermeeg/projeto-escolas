let {Sequelize, DataTypes} = require("sequelize");
let db = require("./db");

const administracao = db.define("administracao",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        atual_administracao : {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
);

module.exports = administracao;