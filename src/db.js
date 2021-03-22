let Sequelize = require("sequelize");

let db = new Sequelize(
    "postgres://mtxxviwafizxie:74c8e866f2923c65ab46c08c67faed9378713b8d857d71f38bd1fd857369771d@ec2-52-7-115-250.compute-1.amazonaws.com:5432/dfh6je3vku9bs0",
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, 
            }
        }
    }
);

module.exports = db;