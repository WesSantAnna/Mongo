const database = 'crud';
use(database);

// Usando updateOne

// Adiciona um dado ao final da lista "technologies"
db.create_commands.updateOne(
  { name: "Wesley SantAnna" },
  { $push: { "department.profile.technologies": "DAO project pattens" } }
);

// Adiciona múltiplos dados de uma vez à lista "technologies"
db.create_commands.updateOne(
  { name: "Wesley SantAnna" },
  { $push: { "department.profile.technologies": { $each: ["Design Systems", "DDD"] } } }
);

// // Verifica o documento atualizado
db.create_commands.find({ name: "Wesley SantAnna" });

// Usando updateMany
db.create_commands.updateMany(
  { age: { $gt: 20 } },
  { $set: { "department.profile.certification": "Oracle Cloud" } }
);

db.create_commands.find()
