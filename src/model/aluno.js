let {Sequelize, DataTypes} = require("sequelize");
let db = require("./db");

const aluno = db.define("aluno",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        acesso: {
            type: DataTypes.INTEGER,
            allowNull: false
    }
);

module.exports = aluno;