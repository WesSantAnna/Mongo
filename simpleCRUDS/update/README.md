## **UPDATE** – Atualizar documentos

```jsx
db.usuarios.updateOne(
  { nome: "João" },
  { $set: { idade: 31 } }
)

db.usuarios.updateMany(
  { idade: { $lt: 30 } },
  { $set: { ativo: true } }
)

db.usuarios.replaceOne(
	{ idade: { $lt: 29 } },
	{ idade: 30}
)
```

O comando `updateOne` tem a seguinte sintaxe.

```jsx
db.collection.updateOne(
   <filter>,
   <update>,
   { /*se o valor não for encontrado no filtro, o valor em 'upset' será inserido.*/
     upsert: <boolean>, 
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
     hint:  <document|string>,
     let: <document>,
     sort: <document>
   }
) 
```

O comando segue essa estrutura: `db.collections.updateOne({ b: 456 }, { $set: { d: 555 }})`

```jsx
// se o comando for bem sucedido temos a seguinte saída
// db.collections.updateOne({ <filter> }, { <update> }})
{ 
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

O camando `updateMany` segue o mesmo formato

Por sua vez, para o comando `replaceOne` temos:

 

```jsx
db.collection.replaceOne(
   <filter>,
   <replacement>,
   {
      upsert: <boolean>,
      writeConcern: <document>,
      collation: <document>,
      hint: <document|string>,
      sort: <document>
   }
)
```

### update vs. replace

Existe uma grande diference entre update e replace e os nomes já evidenciam:

- update → adiciona um novo par *chave:valor* ao documento de identificador unívoco.
    
    ```jsx
    // Amtes do update
    [
    	{ _id: ObjectId('683f07fcd3d15c69886c4bd2'), b: 456 },
    ]
    // depois do update
    [                                       // novo par chave:valor
    	{ _id: ObjectId('683f07fcd3d15c69886c4bd2'), b: 456, d: 555 }
    ]
    ```
    
- replace → substitui o valor presente pelo declarado no comando
    
    ```jsx
    // antes do replaceOne
    [
    	{ _id: ObjectId('683f07fcd3d15c69886c4bd6'), c: 789 },
    ]
    // depóis do replaceOne
    {
    	{ _id: ObjectId('683f07fcd3d15c69886c4bd6'), utilizando: 'replace'
    }
    ```