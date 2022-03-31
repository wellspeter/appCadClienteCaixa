const db = require('./db');


const getAllFeirasEventos = (request, response) => {
    db.client.connect();
    db.client.query('SELECT id, nome, data_inicio, data_fim  FROM feiras_eventos', (error, results) => {
        if (error) {
            throw error
        }
        db.client.end();
        response.status(200).json(results.rows)
    })
}

const insertcliente = (request, response) => {
    
    const { inpevento, inpmatricula, inpescritorio, inpescritoriocod } = request.body
    //console.log(request.body.tipocliente);
    if(request.body.tipocliente == 'cpf'){
      console.log(request.body.tipocliente);
    }
    if(request.body.tipocliente == 'cpnj'){
      console.log(request.body.tipocliente);
    }
    if(request.body.tipocliente == 'revenda'){
      console.log(request.body.tipocliente);
    }
    /*

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
    */
    response.status(201).send(request.body)
  }

module.exports = {
    getAllFeirasEventos,
    insertcliente
}