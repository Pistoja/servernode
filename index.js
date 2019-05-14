const express = require('express')
const app = express()
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const uri = 'mongodb+srv://pittest:test9579@cluster0-ujkg8.mongodb.net/test?retryWrites=true';
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect((err) => {
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected.....');
  const db = client.db("servernode");
  const collection = db.collection("personaggi")
  // READ
  collection.find().toArray(function (err, result) {
    if (err) throw err
    console.log(result)
  })
  // CREATE
  db.collection('personaggi', function (err, collection) {
    const mario = { name: 'Ned', lastname: 'Stark' };
    collection.insertOne(mario);

    client.db("servernode").collection('personaggi').countDocuments(function (err, count) {
        if (err) throw err;
        console.log('Total Rows: ' + count);
    });
  });

  // UPDATE
  db.collection('personaggi', function (err, collection) {
    const newOne = { nome: 'Pippo', cognome: 'Stark', vivo: false};
    collection.updateOne({_id:ObjectId("5cd5365c1c9d440000438929")}, { $set: newOne },
    function(err, result){
      if(err) throw err;
      console.log('Document Updated Successfully');
    });
  });
  // DELETE
  collection.deleteOne({_id:ObjectId("5ccb457f1c9d4400004636e2")}, {w:1}, function(err, result) {
    if(err) throw err;
    console.log(`Document Removed Successfully`);
  });
  // perform actions on the collection object
  client.close();
});


app.use(express.urlencoded({extended: false}))

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use('/v0.2/personaggi', personaggi)
// app.use('/v0.2/admin/', personaggi)


app.use((req, res) => {
  res.status(404).send('what??? error 404')
});
app.listen(port)