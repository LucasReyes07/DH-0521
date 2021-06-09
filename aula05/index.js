let pets = [
    {
        nome: 'Sammy',
        NomeDono: 'Lucas',
        idade: 10,
        tipo: 'Cachorro',
        raca: 'Golden',
        peso: 45,
        genero: 'Macho',
        cor: 'Dourado',
        vacinado: true
    },

    {
        nome: 'Miau',
        NomeDono: 'Brenda',
        idade: 4,
        tipo: 'Gato',
        raca: 'Vira-lata',
        peso: 10,
        genero: 'Macho',
        cor: 'Malhado',
        vacinado: true
    },

    {
        nome: 'Hanna',
        NomeDono: 'denis',
        idade: 7,
        tipo: 'Pássaro',
        raca: 'Perequito Australiano',
        peso: 1,
        genero: 'Femea',
        cor: 'Amarelo',
        vacinado: true
    },

]

function listarPets() 
{
    for(let i=0; i < pets.length; i++){
        console.log('Nome: '+ pets[i].nome)
    } 
}
//listarPets();


function cadastrarPet(arrayPets, objetoPet)
{
    return arrayPets.push(objetoPet)

}
let novoPet =
{
    nome: 'Joao',
    NomeDono: 'Itak',
    idade: 9,
    tipo: 'Cachorro',
    raca: 'Dalmata',
    peso: 30,
    genero: 'Macho',
    cor: 'Malhado',
    vacinado: true
}

cadastrarPet(pets, novoPet)
listarPets()


function validaDados(objetoPet)
{
    return (objetoPet.nome && 
        objetoPet.nomeDono &&
        objetoPet.idade &&
        objetoPet.tipo &&
        objetoPet.raca &&
        objetoPet.peso &&
        objetoPet.genero &&
        objetoPet.cor &&
        objetoPet.vacinado)
}



function cadastrarPet(arrayPets, objetoPet){
    if(typeof objetoPet == "object"){
      if(validaDados(objetoPet)){
        arrayPets.push(objetoPet)
        console.log(pets)
      } else {
        console.log('O objeto não tem todas as propriedades necessárias informadas')
      }
    } else {
      console.log('Insira um objeto válido')
    }
  }    
cadastrarPet(pets)





