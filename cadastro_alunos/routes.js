const express = require('express');
const router = express.Router();
const db = require('./db');

//endpoint leitura de alunos
router.get('/alunos', (req, res) => {
    const query = 'SELECT * FROM alunos';

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao obter alunos');
        }else {
            res.json(result)
        }
    })
});

//endpoitn de Criação de Aluno
router.post('/alunos', (req, res) => {
    const {nome, idade} = req.body;

    const query = `INSERT INTO alunos(nome, idade) VALUES('${nome}', ${idade})`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao criar aluno');
        }else {
            res.status(201).send('Aluno criado com sucesso');
        }
    });
});  

module.exports = router;