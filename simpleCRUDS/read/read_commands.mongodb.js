const database = 'crud';

use(database);

db.create_commands.find() /* Show all the documents */ 

db.create_commands.find({name: "Wesley SantAnna"})  /*Show only the documents that matches with 'Wesley SantAnna' */

db.create_commands.find({age: {$gt: 24}})

db.create_commands.find({ "department.profile.knowledges": "Python" });

db.create_commands.find({ "department.name": "DevOps" });