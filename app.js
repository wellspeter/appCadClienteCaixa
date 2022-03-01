const express = require("express");
const app = express();
const path = require('path');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
//const pagamento = require("./models/Pagamento")


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));

//Rotas
app.get('/', function(req, res){
    res.send("serfico foi!")
});

app.get('/cadastrocliente', function(req, res){
    res.render('cadastrocliente');
});

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
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

 //Inicia o servidor e disponibiliza a aplicação na porta 3000.
  app.listen((process.env.PORT || 3000), function () {
    console.log('listening on *:3000');
  });
