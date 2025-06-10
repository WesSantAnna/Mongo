const database = 'center_pokemon';

use(database)

db.pokemon.find({legendary: true})