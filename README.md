# Conceitos
# MongoDB

*Mongo BD* é um banco de dados não relacional cujo paradigma é orientado a documentos, isto significa que é um modelo de dados intuitivo, rápido e fácil que oferece uma estrutura flexível que permite que o modelo evolua conforma as necessidades da aplicação.

O fato de ser NoSQL permite que seja armazenado documentos flexíveis ao invés de linhas e colunas fixas.  

## Documentos

Um documento é um registro em um banco de dados orientado a documentos, cujo armazena informações do objeto e seus metadados relacionados. São armazenados no formato ***chave:valor***  e pode incluir vários tipos de dados como strings, arrays, números, datas ou objetos nos formatos JSON, BSON e XML.

Exemplo:

```json
   {
         "_id": 1,
         "first_name": "Tom",
         "email": "tom@example.com",
    }
         "celular": "765-555-5555",
         "gostos": [
            "moda",
            "spas",
            "compras"
         ],
         "empresas": [
            {
               "nome": "Entretenimento 1080",
               "parceiro": "Jean",
               "situação": "Falido",
               "data_fundação": {
                  "$data": "2012-05-19T04:00:00Z"
               }
            },
            {
               "nome": "Swag para Adolescentes",
               "data_fundação": {
                  "$data": "2012-11-01T04:00:00Z"
               }
            }
         ]
      }
```

### BSON

JSON binário que é uma evolução do formato de dados JSON porque permite que seja armazenados metadados onde são otimizados em velocidade, espaço e eficiência.

```json
**{"hello": "world"} →
\x16\x00\x00\x00           // total document size
\x02                       // 0x02 = type String
hello\x00                  // field name
\x06\x00\x00\x00world\x00  // field value
\x00                       // 0x00 = type EOO ('end of object')
 
{"BSON": ["awesome", 5.05, 1986]} →
\x31\x00\x00\x00
 \x04BSON\x00
 \x26\x00\x00\x00
 \x02\x30\x00\x08\x00\x00\x00awesome\x00
 \x01\x31\x00\x33\x33\x33\x33\x33\x33\x14\x40
 \x10\x32\x00\xc2\x07\x00\x00
 \x00**
```

## Coleções

Uma coleção é um conjunto de documentos que compartilham de conteúdo semelhante. Nem todos os documentos em uma coleção precisam ter os mesmos campos, pois os bancos de dados de documentos possuem `squemas` flexíveis.

No exemplo acima podemos generalizar as informações de Tom em uma coleção chamada `Users` que pode receber mais documentos com outros dados de `Users`

```json
     {
     "_id": 2, 
     "first_name": "Donna", 
     "email": "donna@example.com",
     "cônjuge": "Joe", 
     "gostos": [ "spas", 
       "compras", 
         "live tweeting"
      ], 
     "empresas": [ 
     {
       "name": "Castle Realty",
       "status": "Próspera",
       "date_founded": { 
          "$date": "2013-11-21T04:00:00Z"
               }
            }
         ]
      }
```

Observe que o documento de Donna não contém os mesmos campos que o documento de Tom. A coleção `users` está utilizando um esquema flexível para armazenar as informações que existem para cada usuário.

## Operações CRUD

Os bancos de dados de documentos geralmente possuem uma API ou linguagem de query que permite aos desenvolvedores realizar operações CRUD (criar, ler, atualizar e excluir).

- **Criar** : Documentos podem ser criados no banco de dados. Cada documento tem um identificador único.
- **Leitura** : Os documentos podem ser lidos do banco de dados. A API ou linguagem de query permite que os desenvolvedores consultem documentos usando seus identificadores únicos ou valores de campo. Índices podem ser adicionados ao banco de dados para melhorar o desempenho de leitura.
- **Atualizar** : Documentos existentes podem ser atualizados — seja no todo ou em parte.
- **Excluir** : Documentos podem ser removidos do banco de dados.

# ObjectId

Funciona como uma chave primária gerado automaticamente pelo Mongo.  Em sua composição temos 12 bytes de comprimento que são armazenado as seguintes informações:

1. Um carimbo de data/hora de 4 bytes, medidos desde da época do Unix
2. Um valor aleatório de 5 bytes gerado uma vez por processo, mas que é exclusivo da máquina e do processo, podendo ser gerado novamente se o processo mudar ou a aplicação reiniciar
3. Um contador de incremento de 3 bytes por processo do lado do cliente. O contador é reinicado quando a aplicação é reiniciada. 

Você pode passar qualquer valor para o ObjectId, **desde que seja único na sua collection**.

# Ambiente

Precisa fazer configurções via variáveis de ambiente 

Precisa rodar o comando **pwsh** para rodar a versão mais recendo do *powershell*

# Comandos

## Sintaxe base

```powershell
db.<nome_da_coleção>.<funçãoCRUD>()
```

```powershell
db.<nome_da_coleção>.<funçãoCRUD>()
```

---

### **1. CREATE** – Inserir documentos

```jsx
db.usuarios.insertOne({ nome: "João", idade: 30 })
db.usuarios.insertMany([
  { nome: "Maria", idade: 25 },
  { nome: "Pedro", idade: 28 }
])
```

---

### **2. READ** – Consultar documentos

```jsx
db.usuarios.find() // retorna todos
db.usuarios.findOne({ nome: "Maria" }) // retorna o primeiro que corresponder
db.usuarios.find({ idade: { $gt: 26 } }) // idade maior que 26
```

---

### **3. UPDATE** – Atualizar documentos

```jsx
db.usuarios.updateOne(
  { nome: "João" },
  { $set: { idade: 31 } }
)

db.usuarios.updateMany(
  { idade: { $lt: 30 } },
  { $set: { ativo: true } }
)
```

---

### **4. DELETE** – Remover documentos

```jsx
db.usuarios.deleteOne({ nome: "Pedro" })
db.usuarios.deleteMany({ idade: { $lt: 25 } })
```

---

### Selecionando banco de dados

Antes de usar `db`, você seleciona o banco com:

```jsx
use nome_do_banco
```

Depois disso, `db` se refere a esse banco.