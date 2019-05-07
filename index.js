const express = require('express')
const app = express()
const {settings} = require('./settings.js')
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 7070

const myLogger = (req, res, next) => {
    console.log('LOGGED');
    next();
}

app.use(myLogger);

app.use('/users', users)
app.use('/personaggi', personaggi)

app.listen(port)