
// const moduloA = require('./moduloA').default

// function pegarValorIndex () {
//     const valorIndex = 20
//     moduloA

//     console.log(valorIndex);
    
// }
// pegarValorIndex()

const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.listen(`${port}`);
