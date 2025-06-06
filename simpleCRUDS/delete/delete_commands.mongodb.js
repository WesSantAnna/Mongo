database = 'crud'

use(database)

db.create_commands.find()

db.create_commands.deleteOne(
    { name: "Guilherme Silva"}
)

db.create_commands.deleteMany(
    { age: { $lte: 25 } }
)

db.create_commands.find()