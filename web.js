const Banco = require("./comandos/class/Banco.js");
//------------EXPRESS----------------
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000; //porta padrão
const mysql = require('mysql');

app.use(cors());
//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
app.use('/', router);
app.use(express.static(__dirname));
app.use(express.static("amigos"));

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

//-----------------------------------

router.get('/', (req, res) =>{
    res.send
    res.sendFile("./", { root: 'amigos' });
});

router.get('/friends', (req, res) =>{
    res.sendFile("./friends/", { root: 'amigos' });
});

router.post('/awards', (req, res) =>{
    const ano = req.body.ano;
    const aguardado = req.body.aguardado;
    const original = req.body.original;
    const hardware = req.body.hardware;
    const tiro = req.body.tiro;
    const aventura = req.body.aventura;
    const luta = req.body.luta;
    const rpg = req.body.rpg;
    const corrida = req.body.corrida;
    const esporte = req.body.esporte;
    const estrategia = req.body.estrategia;
    const familia = req.body.familia;
    const mobile = req.body.mobile;
    const multiplayer = req.body.multiplayer;
    const trilha = req.body.trilha;
    const estudio = req.body.estudio;
    const publisher = req.body.publisher;
    const independente = req.body.independente;
    const nome = req.body.nome;
    Banco.execSQLQuery2(`INSERT INTO awards VALUES('${ano}','${aguardado}','${original}', '${hardware}' , '${tiro}' , '${aventura}' , '${luta}' , '${rpg}' , '${corrida}' , '${esporte}' , '${estrategia}' , '${familia}' , '${mobile}' , '${multiplayer}' , '${trilha}', '${estudio}', '${publisher}' , '${independente}', '${nome}')`, res);
    
});

