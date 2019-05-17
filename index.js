const express = require('express')
const app = express()
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080


app.use(express.urlencoded({extended: false}))

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use('/v0.2/personaggi', personaggi)



app.use((req, res) => {
  res.status(404).send('what??? error 404')
});
app.listen(port)