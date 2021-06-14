const express = require('express');

const app = express()

app.listen(3000, () => { 
    console.log('Servidor rodando: http://localhost:3000')
})


app.get('/cumprimentar/:nome', (req,res) => {
    let nome = req.params.nome;
    const cumprimentar = 'Olá,' + nome
    res.send(cumprimentar)
}
);