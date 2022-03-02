const express = require("express");
const app = express();
const path = require('path');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//envio para email
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
//const pagamento = require("./models/Pagamento")

//envio para o telegran
//require('dotenv-safe').config();
const { Telegraf } = require('telegraf')

const bot = new Telegraf('5133302001:AAFfjSB6Hz_eVuPWaZ_0X0D4nCa5gdGhKa4');



app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

//Rotas

//Rotas
app.get('/', function(req, res){
    res.send("serfico foi!")
});

app.get('/cadastrocliente', function(req, res){
    res.render('cadastrocliente');
});

app.post('/add-pagamento', function(req, res){
    //pagamento.create({
    //    nome: req.body.nome,
    //    valor: req.body.valor
    //}).then(function(){
    //    res.redirect('/pagamento')
    //    //res.send("Pagamento cadastro com sucesso!")
    //}).catch(function(erro){
    //    res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
   // })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
})

app.post('/enviarform', function(req, res){
    var conversarTxt = 'Dados do officer \n Matricula:'+req.body.inpmatricula+'\n Escritório: '+req.body.cboescritorio +'\n Dados Cliente \n Nome: '+ req.body.inpnopmecliente+' \n CPF/CNPJ: '+ req.body.inpcnpjcpf+' \n email: ' + req.body.inpemail + '\n Telefone: ' + req.body.inptelefone + '\n Valor Inter Invs: ' + req.body.cbovalor + '\n Direcionamento do Cliente \n Tipo cliente: ' +  req.body.cboTipoCliente + '\n Urgencia Contato: '+ req.body.cboUrgenciaContato + '\n Tipo Invest: ' +  req.body.cboUrgenciaContato + '\n Tipo Invest: '+ req.body.cboTipoInvest + '\n OBS: '+ req.body.txtOBS

    console.log('<strong>Dados do officer</strong></br> Matricula:'+req.body.inpmatricula+'</br> Escritório: ');
    bot.telegram.sendMessage(2049947965, conversarTxt);
    res.redirect('/cadastrocliente')
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

    //pagamento.create({
    //    nome: req.body.nome,
    //    valor: req.body.valor
    //}).then(function(){
    //    res.redirect('/pagamento')
    //    //res.send("Pagamento cadastro com sucesso!")
    //}).catch(function(erro){
    //    res.send("Erro: Pagamento não foi cadastrado com sucesso!" + erro)
   // })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>") 
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