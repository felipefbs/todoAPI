/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
const { v4: uuid } = require("uuid");
const sha256 = require("js-sha256");
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("src/infra/database.db");

//==== Usuários
const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "users" (
    "id" CHAR(36) PRIMARY KEY,
    "name" varchar(64),
    "email" varchar(64),
    "password" varchar(64)
  );`;

const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "tasks" (
    "id" char(36) PRIMARY KEY, 
    "title" VARCHAR(64),
    "description" TEXT,
    "status" VARCHAR(32),
    "created_at" VARCHAR(32),
    "user_id" CHAR(36),
    FOREIGN KEY(user_id) REFERENCES user(id)
);`;

user_id_1 = uuid();
user_id_2 = uuid();
user_id_3 = uuid();

user_pwd_1 = sha256((Math.random() + 1).toString(36).substring(2));
user_pwd_2 = sha256((Math.random() + 1).toString(36).substring(2));
user_pwd_3 = sha256((Math.random() + 1).toString(36).substring(2));

const ADD_USUARIOS_DATA = `
INSERT INTO users (id, name, email, password)
VALUES 
    ('${user_id_1}', 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '${user_pwd_1}'),
    ('${user_id_2}', 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '${user_pwd_2}'),
    ('${user_id_3}', 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '${user_pwd_3}')
`;

const ADD_TAREFAS_DATA = `INSERT INTO tasks (id, title, description, status, created_at, user_id)
VALUES 
       ('${uuid()}', 'Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', '${user_id_2}'),
       ('${uuid()}', 'Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', '${user_id_2}'),
       ('${uuid()}', 'Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', '${user_id_2}'),
       ('${uuid()}', 'Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', '${user_id_2}'),
       ('${uuid()}', 'Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', '${user_id_2}'),
       ('${uuid()}', 'Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', '${user_id_3}')
`;

function criaTabelaUsr() {
  db.run(USUARIOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de usuários");
  });
}

function populaTabelaUsr() {
  db.run(ADD_USUARIOS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de usuários", error);
  });
}

//==== Tarefas

function criaTabelaTarefas() {
  db.run(TAREFAS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Tarefas", error);
  });
}

function populaTabelaTarefas() {
  db.run(ADD_TAREFAS_DATA, (error) => {
    if (error) console.log("Erro ao popular tabela de Tarefas");
  });
}

db.serialize(() => {
  criaTabelaUsr();
  populaTabelaUsr();
  criaTabelaTarefas();
  populaTabelaTarefas();
});
