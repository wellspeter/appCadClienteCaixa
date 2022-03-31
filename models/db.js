/*const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'celkeone', '123456',{
    host: 'localhost',
    dialect: 'mysql'
})*/
/*
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'feiras_eventos',
  password: 'baleia',
  port: 5432,
}) 
*/
/*
const Pool = require('pg').Pool
const pool = new Pool({v
  user: 'yjypqdghzinhph',
  host: 'ec2-34-231-183-74.compute-1.amazonaws.com',
  database: 'db4ngoiaiegdp6',
  password: '63a766027d025be2c2cb24c9f5770057e3c86bbf29e004edf533e98d034ff7c7',
  port: 5432,
}) 
*/
/*
const Pool = require('pg').Pool
const pool = new Pool({
    //connectionString: process.env.DATABASE_URL,
    connectionString: process.env.DATABASE_URL || 'postgres://yjypqdghzinhph:63a766027d025be2c2cb24c9f5770057e3c86bbf29e004edf533e98d034ff7c7@ec2-34-231-183-74.compute-1.amazonaws.com:5432/db4ngoiaiegdp6',
    ssl: {
        //ssl: false
        rejectUnauthorized: false
    }
});
*/

const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgres://yjypqdghzinhph:63a766027d025be2c2cb24c9f5770057e3c86bbf29e004edf533e98d034ff7c7@ec2-34-231-183-74.compute-1.amazonaws.com:5432/db4ngoiaiegdp6',
    ssl: {
      rejectUnauthorized: false
    }
  });

module.exports = {
    Client: Client,
    client: client
}

  /*
module.exports = {
    Pool: Pool,
    pool: pool
}
*/

/*
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize


    SIM
    --NOME REVENDA - OUTROS
    --NOMDE DA REVENDA VISITADA
    CNPJ DA EMPRESA 
    UF
    CIDADE
    CONTATO DA EMPRESA (NOME)
    TELEFONE
    OUVE PARCERIA COM A CAIXA


    NAO 
    NOME DA REVENDA VISITADA
    CNPJ
    UF
    CIDADE
    CONTA DA EMPRESA (NOME)
    TELEFONE
    OUVE PARCERIA COM A CAIXA?
}*/