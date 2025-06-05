## **READ** – Consultar documentos

```jsx
db.usuarios.find() // retorna todos
db.usuarios.findOne({ nome: "Maria" }) // retorna o primeiro que corresponder
db.usuarios.find({ idade: { $gt: 26 } }) // idade maior que 26
```

Em Mongo, as querys são muito ituivas e são passadas como argumento da find(). Por exemplo: suponha que temos os seguintes dados

```powershell
[
  { _id: ObjectId('683f07fcd3d15c69886c4bd0'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd1'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd2'), b: 456 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd3'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd4'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd5'), b: 456 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd6'), c: 789 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd7'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd8'), b: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd9'), c: 345 }
]
```

Queremos agora filtrar o que é apresentado e conseguimos fazer isso via comando: **`db.collection.find({query})`**

```powershell
> db.crud.find( { c : { $exists : true } } )
[
  { _id: ObjectId('683f07fcd3d15c69886c4bd6'), c: 789 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd9'), c: 345 }
]

> db.crud.find( { c : { $exists : false } } )
[
  { _id: ObjectId('683f07fcd3d15c69886c4bd0'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd1'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd2'), b: 456 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd3'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd4'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd5'), b: 456 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd7'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd8'), b: 123 }
]
```