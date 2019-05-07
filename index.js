const express = require('express')
const app = express()
const {settings} = require('./settings.js')
const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 7070
app.use('/users', users)
app.use('/personaggi', personaggi)

app.listen(port)