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

//endpoint de Criação de Aluno
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

//endpoint de atualização de alunos
router.put('/alunos/:id', (req, res) => {
    const {id} = req.params;
    const {nome, idade} = req.body;

    const query = `UPDATE alunos SET nome='${nome}', idade=${idade} WHERE id_aluno=${id}`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send(`Erro ao atualizar aluno: ${JSON.stringify(err)}` );

        }else {
            res.send('Aluno atualizado com sucesso');
        }
    })
});

//endpoint para exclusão de um aluno
router.delete('/alunos/:id', (req,res) => {
    const {id} = req.params;

    const query = `DELETE FROM alunos WHERE id_aluno=${id}`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao excluir aluno');
        }else {
            res.send('Aluno excluído com sucesso');
        }
    });
})

//Aulas

//endpoint leitura de alunos
router.get('/aulas', (req, res) => {
    const query = 'SELECT * FROM aulas';

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao obter aulas');
        }else {
            res.json(result)
        }
    })
});

//endpoint de Criação de Aluno
router.post('/aulas', (req, res) => {
    const {nome_aula, descricao} = req.body;

    const query = `INSERT INTO aulas(nome_aula, descricao) VALUES('${nome_aula}', '${descricao}')`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao criar aulas');
        }else {
            res.status(201).send('Aulas criada com sucesso');
        }
    });
}); 

//endpoint de atualização de alunos
router.put('/aulas/:id', (req, res) => {
    const {id} = req.params;
    const {nome_aula, descricao} = req.body;

    const query = `UPDATE aulas SET nome_aula='${nome_aula}', descricao='${descricao}' WHERE id_aula=${id}`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send(`Erro ao atualizar aula: ${JSON.stringify(err)}` );

        }else {
            res.send('Aula atualizada com sucesso');
        }
    })
});

//endpoint para exclusão de um aluno
router.delete('/aulas/:id', (req,res) => {
    const {id} = req.params;

    const query = `DELETE FROM aulas WHERE id_aula=${id}`;

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao excluir aula');
        }else {
            res.send('Aula excluída com sucesso');
        }
    });
})

router.post('/inscricao', (req,res) => {
    const {id_aluno, id_aula} = req.body;
    const query = `INSERT INTO alunos_aulas (id_aula, id_aluno) VALUES(${id_aluno}, ${id_aula})`

    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send(`Erro ao inscrever-se ${JSON.stringify(err)}`)
        } else {
            res.statusMessage(201).send('Inscrição efetuada com sucesso')
        }
    })
})

router.get('/inscricao', (req,res) => {
    const query  = 'SELECT * FROM alunos_aulas';

    db.query(query, (err,result) => {
        if(err) {
            res.status(500).send('Erro ao obter inscrição')
        } else {
            res.json(result)
        }
    })
})

router.get('/inscricao/:id', (req, res) => {
    const {id} = req.params
    const query = `SELECT * FROM alunos_aulas WHERE id_alunos=${id}`
    
    db.query(query, (err, result) => {
        if(err) {
            res.status(500).send('Erro ao obter inscrição do aluno')
        } else {
            res.json(result)
        }
    })
})

module.exports = router;