const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

app.get("/", function(req, res) {
    res.send("Bem vindo ao meu site!");
})

app.get("/produtos", function(req, res) {
    res.send("<h1>Lista de Produtos!</h1>")
})

app.get("/consulta/:parametro", function(req, res) {
    res.send("Retorno consulta: " + req.params.parametro);
})

app.get("/cadastro/{:nome}", function(req, res) {
    var nome = req.params.nome;
    if (nome) {
        res.send("<h1>Produto " + nome + " criado!</h1>");
    } else {
        res.send("Produto criado!");
    }
})

app.listen(4000, function(erro) {
    if (erro) {
        console.log("Erro ao Iniciar.");
    } else {
        console.log("Servidor Iniciado.")
    }
})