## **CREATE** – Inserir documentos

```jsx
db.usuarios.insertOne({ nome: "João", idade: 30 })
db.usuarios.insertMany([
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 28 }
])
```

Sintaxe

```powershell
db.collection.insertOne(
    <document>,
    {
      writeConcern: <document>
    }
)
```

Se a coleção não existir, o comando cria.

Sintaxe

```powershell
db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)
```

Por padrão, os documentos são inseridos na ordem em que são fornecidos. Se o `ordered` estiver configurado para `true` e uma inserção falhar, o servidor não continuará inserindo registros. Se `ordered` estiver definido como `false` e uma inserção falhar, o servidor continuará inserindo registros

### Ordered

Ao darmos o comando `db.collection.find()` temos:

```powershell
> db.collection.find()
[
  { _id: 1, a: 123 },
  { _id: 2, b: 456 },
  { _id: 3, c: 789 },
]
```

Se em um seguida rodarmos o seguinte comando: 

```powershell
db.collection.insertMany(
	[
		{ _id: 2, msg: 'Duplicidade de chave' }, 
		{ _id: 4, msg: "Inserção com o ordered padrão (true)" }
	], 
	{ ordered: true}
)
```

Teriamos, nesse comando, um erro de inserção (código 11000 (duplicidade de chave)) pois o valor *ordered* está setado como `true` com uma saída parecida com a seguinte:

```powershell
MongoBulkWriteError: 
E11000 duplicate key error collection: 
minhaCollection.minhaCollection index: _id_ dup key: { _id: 2 }
Result: BulkWriteResult {
  insertedCount: 0,
  matchedCount: 0,
  modifiedCount: 0,
  deletedCount: 0,
  upsertedCount: 0,
  upsertedIds: {},
  insertedIds: {}
```

No entanto, se alterarmos o valor de *ordered* para false com o mesmo comando teriamos a seguinte saida

```powershell
db.collection.insertMany(
	[
		{ _id: 2, msg: 'Duplicidade de chave' }, 
		{ _id: 4, msg: "Inserção com o ordered alterado (false)" }
	], 
	{ ordered: false }
)
```

Ainda sim teríamos um erro de duplicidade, mas a inserção dos documento que estão corretos continuaria, retornando algo como:

```powershell
MongoBulkWriteError: E11000 duplicate key error collection: 
minhaCollection.minhaCollection index: _id_ dup key: { _id: 2 }
Result: BulkWriteResult {
  insertedCount: 1,
  matchedCount: 0,
  modifiedCount: 0,
  deletedCount: 0,
  upsertedCount: 0,
  upsertedIds: {},
  insertedIds: { '1': 4 }
```

Nesse ponto, se rodarmos o comando `db.collection.find()`, teríamos:

```powershell
[
	{ _id: 1, a: 123 },
  { _id: 2, b: 456 },
  { _id: 3, c: 789 },
  { _id: 4, msg: 'Inserção com o ordered alterado (false)' }
]
```v