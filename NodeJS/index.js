
//const moduloA = require('./moduloA').default

// function pegarValorIndex () {
//     const valorIndex = 20
//     moduloA

//     console.log(valorIndex);
    
// }
// pegarValorIndex()

const express = require('express')
const app = express();
const port = 3000;

app.use(express.json())


let users = [{
    id: 1,
    name: "Euclides"
},
{
    id: 2,
    name: "Josefá"
},
{
    id: 3,
    name: "Maria"
},
{
    id: 4,
    name: "Antonio"
},
{
    id: 5,
    name: "José"
}

]

app.get('/', (req,res) => {
    res.send('Hello World')
});

app.post('/users', (req,res) => {
    console.log(req.body)
    const { name } = req.body;
    const id = users.length + 1;
    res.send(req.body)
    const newUser = {id, name}

    users.push(newUser)
    res.status(201).json(newUser)

})

app.get('/users', function (req,res) {
    res.send(JSON.stringify(users))
})

app.get('/users/id/:id', function(req,res){
    const id = parseInt(req.params.id);
    const userIndex = users.find(user => user.id === id);
    if(userIndex.id) {
        res.json(userIndex)
    }
    else {
        res.status(404).json({message: "User nout found"})
    }
})

app.delete("/users/id/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const user = users.filter(user => user.id !== id);
    if(user) {
        res.send(JSON.stringify(user)).status(204)
        
    }else {
        res.status(404).json({message: "User not found"})
    }
    
})

app.put("users/id/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body
    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex !== -1) {
        users[userIndex] = name;
        res.json(users[userIndex])
    }
    else {
        res.status(400).json({message: "Usuario não encontrado"})
    }

})


app.listen(`${port}`);

    
