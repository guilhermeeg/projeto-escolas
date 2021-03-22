let {Sequelize, DataTypes} = require("sequelize");
let db = require("./db");

const escolas = db.define("escolas",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        historia_da_escola: {
            type: DataTypes.STRING,
            allowNull: false
        },
        localizacao: DataTypes.STRING
            allowNull: false
    
    }
);

module.exports = escolas;