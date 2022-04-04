const db = require('./db');


const getAllFeirasEventos = (request, response) => {
    db.client.connect();
    db.client.query('SELECT id, nome, data_inicio, data_fim  FROM feiras_eventos', (error, results) => {
        if (error) {
            throw error
        }
        //db.client.end();
        response.status(200).json(results.rows)
    })
}

const insertcliente = (request, response) => {
    //db.client.connect();
    
    //const { inpevento, inpmatricula, inpescritorio, inpescritoriocod } = request.body
    //console.log(request.body);
    var sql = ''
    if(request.body.tipocliente == 'cpf'){
      sql = "INSERT INTO public.perguntas("
      sql +="tipocliente"
      sql +=", evento"
      sql +=", matricula_empregado"
      sql +=", escritorio"
      sql +=", co_escritorio"
      sql +=", cliente_cpf"
      sql +=", cliente_nome"
      sql +=", cliente_estado"
      sql +=", cliente_municio"
      sql +=", cliente_email"
      sql +=", cliente_telefone"
      sql +=", cliente_enquadramento"
      sql +=", cliente_orcamento"
      sql +=", cliente_orcamento_valor"
      sql +=", cliente_orcamento_revenda"
      sql +=", cliente_orcamento_revenda_outros"
      sql +=", cliente_orcamento_nome_vendendo"
      sql +=", cliente_orcamento_tele_vendendor"
      sql +=", cliente_orcamento_anexo"
      sql +=", cliente_observacao"
      sql +=")VALUES("
      sql +="'" +request.body.tipocliente+"' "
      sql +=","+ parseInt(request.body.inpevento)+" "
      sql +=",'"+ request.body.inpmatricula+"' "
      sql +=",'"+ request.body.inpescritorio+"' "
      sql +=",'"+ request.body.inpescritoriocod+"' "
      sql +=",'"+ request.body.CPF+"' "
      sql +=",'"+ request.body.nomeCliente+"' "
      sql +=",'"+ request.body.uf+"' "
      sql +=",'"+ request.body.municipioCliente+"' "
      sql +=",'"+ request.body.emailCliente+"' "
      sql +=",'"+ request.body.teleCliente+"' "
      sql +=",'"+ request.body.rbenquadramento+"' "
      sql +=",'"+ request.body.clienteRbOrcamento+"' "
      sql +=",'"+ request.body.clienteOrcamentoValor+"' "
      sql +=",'"+ request.body.clienteOrcamentoRevenda+"' "
      sql +=",'"+ request.body.clienteNomeRevendaEscritaOrcamento+"' "
      sql +=",'"+ request.body.clienteOrcamentoNomeRevendendor+"' "
      sql +=",'"+ request.body.clienteOrcamentoTeleVendendor+"' "
      sql +=",'"+ request.body.clienteOrcamentoUpload+"' "
      sql +=",'"+ request.body.txtOBS+"' "
      sql +=")"
    }

    if(request.body.tipocliente == 'cpnj'){
      console.log(request.body.tipocliente);
    }

    if(request.body.tipocliente == 'revenda'){
      console.log(request.body.tipocliente);
    }
    //console.log(sql);
    
    db.client.query(sql, (error, results) => {
        if (error) {
            throw error
        }
        db.client.end();

        response.render('confirmacaoCad');
        
    })
    /*

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    })
    */
    //response.status(201).send(request.body)
  }

module.exports = {
    getAllFeirasEventos,
    insertcliente
    }