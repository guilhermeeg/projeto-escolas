const { Pool } = require('pg');

async function criarConexao() {
	const poll = new Pool({
		connectionString:
			'postgres://mtxxviwafizxie:74c8e866f2923c65ab46c08c67faed9378713b8d857d71f38bd1fd857369771d@ec2-52-7-115-250.compute-1.amazonaws.com:5432/dfh6je3vku9bs0',
		ssl: {
			rejectUnauthorized: false
		}
	});
	let con = await poll.connect();
  await con.query(`create table Escola(
            id serial,
            localizaçao varchar,
            historia_da_escola varchar,
            constraint Escola_pk primary key (id)
        )`);

      	await con.query(`create table administraçao(
            id serial,
            atual_administraçao varchar,
            constraint administraçao_pk primary key (id)
        )`);
        
	await con.query(`create table ambientaçao(
            id serial,
            imagens integer,
            propostas varchar,
            constraint ambientaçao_pk primary key (id)
        )`);

      	await con.query(`create table aluno(
            id serial,
            acesso varchar,
            constraint aluno_pk primary key (id)
        )`);
	
}
criarConexao();
