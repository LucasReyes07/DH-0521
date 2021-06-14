const express = require('express');
const app = express();
app.use(express.json())
const usuarios = []
app.get('/usuario', (req, res) => {
    return res.send(usuarios)
})
app.post('/usuario', (req, res) => {
    const usario = req.body
    usuarios.push(usario)
    return res.json(usuarios)
})
app.delete('/usuario/:nome', (req, res) => {
    const nomeUsuario = req.params
    const usuarioIndex = usuarios.findIndex(usuario => usuario.nome == nomeUsuario.nome);
    if (usuarioIndex < 0) {
        return res.status(400).json({ error: 'Usuário não encontrado.' });
    }
    usuarios.splice(usuarioIndex, 1);
    return res.status(200).json(usuarios);
})
app.listen(3000, (req, res) => {
    console.log("Servidor Online")
})