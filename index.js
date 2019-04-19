const express = require('express')
//let port = process.argv[2] || 3000
let port = process.argv[2] || 3000
const app = express() 

//app.use(express.static('public'))
app.use(express.static(__dirname + '/public'))

//app.get('/', (req, res) => {
//  res.send('Hello World')
//}) 

app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}`);