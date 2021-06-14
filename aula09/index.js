// Criar uma instancia do express
const app = express()
app.get('/', (req,res) => {
  res.send('Você está na home')
})
app.get('/cumprimentar', (req,res) => {
  res.send('Olá')
})
// Desafio - Criar uma rota parametrizada, que irá se chamar /cumprimentar 
// e terá um parâmetro que será um nome, logo, ele terá que receber esse parâmetro
// que foi informado e exibir uma mensagem de cumprimento "Olá, nome".
app.get('/cumprimentar/:nome', (req,res) => {
  const nome = req.params.nome
  res.send('Olá, ' + nome)
})
// Desafio - Criar uma rota parametrizada, que irá se chamar /calcular 
// e terá dois parâmetros que serão números, caso, receba apenas o primeiro parâmetro, 
// deverá retornar ele, ou, caso recebe os dois parâmetros terá que somar os dois e retornar
// o resultado.

// se receber 1º retorná-lo, senão, caso receba os dois parâmetros efetuar a soma
app.get('/calcular/:numero1/:numero2?', (req, res) => {
  let { numero1, numero2 } = req.params

  if(numero2){
    let resultado = parseInt(numero1) + parseInt(numero2)
    res.send('O resultado da soma é: ' + resultado)
  } else {
    res.send(numero1)
  }
})

// Utilizarem o método listen para que com um console.log
// consigam exibir a mensagem: Servidor rodando na porta 3000
app.listen(3000, () => {})