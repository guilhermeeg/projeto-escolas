let db = require("../db");
let escolas = require("./model/escolas");
let administracao = require("./model/administracao");
let ambientacao = require("./model/ambientacao");
let aluno= require("./model/aluno");


async function sincronizar() {
    await db.sync({force:true});
}
sincronizar();
