const express = require("express");
const app = express();
const path = require('path');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const fs = require('fs')
const https = require('https')

/********************************** conect DB *****************************************/
const db = require('./models/queries')
app.get('/getAllFeirasEventos', db.getAllFeirasEventos);


/************************ configuracoes  */
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');    
app.use(express.static(path.join(__dirname, 'public')));

const key = fs.readFileSync('./certs/localhost.key');
const cert = fs.readFileSync('./certs/localhost.crt');
const httpPort = 80;
const httpsPort = 443;

const server = https.createServer({key: key, cert: cert }, app);
/*
app.use((req, res, next) => {
    if (!req.secure) {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
})
*/
//const pagamento = require("./models/Pagamento")

/*****************************  ROTAS DE PAGINA ********************************************** */
//Rotas
app.get('/', function(req, res){
    res.render('login');
});
/*
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
*/

app.get('/funcionario', function(req, res){
    res.render('func');
});

app.get('/cadcliente', function(req, res){
    res.render('cadastrocliente');
});

app.get('/confirmacao', function(req, res){
    res.render('confirmacaoCad');
});

/****************************ROTAS PROCESSADAS FORM ********************************************* */
app.post('/cadFunc', function(req, res){
    var conversarTxt = 'Dados do officer \n Matricula:'+req.body.inpmatricula
});
app.post('/users', db.insertcliente);
app.post('/enviarform', function(req, res){  });

app.listen((process.env.PORT || 3000), function () {
    console.log('listening on *:3000');
});
/*
app.listen(httpPort, function () {
    console.log(`Listening on port ${httpPort}!`)
});

server.listen(httpsPort, function () {
    console.log(`Listening on port ${httpsPort}!`)
});
*/
