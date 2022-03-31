const express = require("express");
const app = express();
const path = require('path');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const { Telegraf } = require('telegraf'); // uso do telegran
const bot = new Telegraf('5133302001:AAFfjSB6Hz_eVuPWaZ_0X0D4nCa5gdGhKa4'); // chave telegran
const sgMail = require('@sendgrid/mail'); // envio de email
sgMail.setApiKey('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');

/********************************** conect DB *****************************************/
const db = require('./models/queries')
app.get('/getAllFeirasEventos', db.getAllFeirasEventos)


/************************ configuracoes  */
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')));


//const pagamento = require("./models/Pagamento")


/*****************************  ROTAS DE PAGINA ********************************************** */
//Rotas
app.get('/', function(req, res){
    res.render('login');
});

app.get('/funcionario', function(req, res){
    res.render('func');
});

app.get('/cadcliente', function(req, res){
    res.render('cadastrocliente');
});

/****************************ROTAS PROCESSADAS FORM ********************************************* */
app.post('/cadFunc', function(req, res){
    var conversarTxt = 'Dados do officer \n Matricula:'+req.body.inpmatricula
});

app.get('/getAllFeirasEventos', db.getAllFeirasEventos);
app.post('/users', db.insertcliente);

 
app.post('/enviarform', function(req, res){


    //var conversarTxt = 'Dados do officer \n Matricula:'+req.body.matricula+'\n Escritório: '+req.body.escritorio +'\n Dados Cliente \n Nome: '+ req.body.inpnopmecliente+' \n CPF/CNPJ: '+ req.body.inpcnpjcpf+' \n email: ' + req.body.inpemail + '\n Telefone: ' + req.body.inptelefone + '\n Valor Inter Invs: ' + req.body.cbovalor + '\n Direcionamento do Cliente \n Tipo cliente: ' +  req.body.cboTipoCliente + '\n Urgencia Contato: '+ req.body.cboUrgenciaContato + '\n Tipo Invest: ' +  req.body.cboUrgenciaContato + '\n Tipo Invest: '+ req.body.cboTipoInvest + '\n OBS: '+ req.body.txtOBS

    console.log('Dados do officer  Matricula: '+req.body.inpmatricula+'  Escritório: '+req.body.inpescritorio+'\n Dados do cliente  \n CPF Cliente: '+req.body.inpCpf);
    //bot.telegram.sendMessage(2049947965, conversarTxt);
    res.redirect('/cadcliente') 
    //cboescritorio
    //'dados do cliente' 
   // inpnopmecliente
   // inpcnpjcpf
   // inpemail
   // inptelefone
  //  cbovalor
  //  'Direcionamento do Cliente'
  //  cboTipoCliente
  //  cboUrgenciaContato
  //  cboTipoInvest
   /* (async () => {
        const msg = {
            to: 'contato@caixa.com', // Change to your recipient
            from: 'wellisonpeter@gmail.com', // Change to your verified sender
            subject: 'Cadastro Cliente',
            text: 'Cadastro de Clientes',
            html: '<strong>Dados do officer</strong></br> Matricula:'+req.body.inpmatricula+'</br> Escritório: ',
        }
        try {
            const result = await sgMail.send(msg);
            console.log('Email sent', result);
            console.log('<strong>Dados do officer</strong></br> Matricula:'+req.body.inpmatricula+'</br> Escritório: ');
            res.redirect('/cadastrocliente')
        }
        catch (error) {
            console.error(error)
        }
    })();
    */
})

app.listen((process.env.PORT || 3000), function () {
    console.log('listening on *:3000');
});

(async () => {
    //require('dotenv-safe').config({silent: true});
    //const sgMail = require('@sendgrid/mail')
    //sgMail.setApiKey('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')
    
   // sgMail
    //.send(msg)
    //.then(() => {
    //    console.log('Email sent')
    //})
    //.catch((error) => {
    //    console.error(error)
    //})
})();
