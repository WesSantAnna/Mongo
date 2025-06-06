```jsx
db.usuarios.deleteOne({ nome: "Pedro" })
db.usuarios.deleteMany({ idade: { $lt: 25 } })
```

Sua sintaxe é simple e segue:

```jsx
db.collection.deleteOne(
    <filter>,
    {
      writeConcern: <document>,
      collation: <document>,
      hint: <document|string>
    }
)
```

**`deleteOne`**

```jsx
> db.collection.find()
[
  { _id: ObjectId('683f07fcd3d15c69886c4bd0'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd1'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd2'), b: 456, d: 555 },
]

> db.collection.deleteOne({ d: 555 })
{ acknowledged: true, deletedCount: 1 }

> db.collection.find()
[
  { _id: ObjectId('683f07fcd3d15c69886c4bd0'), a: 123 },
  { _id: ObjectId('683f07fcd3d15c69886c4bd1'), a: 123 },
]
```