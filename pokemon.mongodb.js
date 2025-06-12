const database = 'center_pokemon';

use(database)

db.pokemon.find({legendary: true}) //encontra todos os pokemons com valor legendario = true

db.pokemon.distinct("generation") //mostra todas as gerações distintas de geração

db.pokemon.findOne({name:"Mewtwo"}) //busca pore text

db.pokemon.find({name:/Mew/}) //utiliza o regex pega todos as string no nome que tenha 'Mew'

db.pokemon.find({name:/Mew/}, {name:1, _id: 0}) //query que permite selecionar os campos que serão apresentados

db.pokemon.find({attack:{$gte:85}},{name:1,attack:1,_id:0}) //utilizando uma query de compatibilidade cujo retorna apenas os valores maiores ou iguais que 85

db.pokemon.find({ attack: { $lte: 110, $gte:60}}, {name:1, defense:1, _id:0})

db.pokemon.find( { 
    $or: [
        { defense: { $gte:60, $lte:72 } }, 
        { defense: 100 }
    ]
}, { _id: 0, name: 1, defense: 1 } ) //utilizando o comando or

db.pokemon.find({
  $or: [
    { defense: { $gte: 80 } },
    { hp: { $gte: 80 } },
    { attack: { $gte: 80 } },
    { speed: { $gte: 80 } }
  ]
},{_id:0}).sort({attack: -1, defense: -1, speed: -1})

